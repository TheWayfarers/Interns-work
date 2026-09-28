import {
    createContext,
    useContext,
    useEffect,
    useReducer
} from "react";

const TimerContext = createContext(null);

const DEFAULT_STATE = {
    studyHours: 0,
    studyMinutes: 25,

    breakHours: 0,
    breakMinutes: 5,

    mode: "study",

    timeLeft: 25 * 60,

    isRunning: false,

    sessionsCompleted: 0,

    history: [],

    theme: "light"
};


function getTotalMinutes(hours, minutes) {
    return (
        Number(hours || 0) * 60 +
        Number(minutes || 0)
    );
}


function getSavedData() {

    const savedData =
        localStorage.getItem("studyTimerData");

    if (!savedData) {
        return DEFAULT_STATE;
    }

    try {

        const oldData = JSON.parse(savedData);

        const studyHours =
            Number(oldData.studyHours ?? 0);

        const studyMinutes =
            Number(oldData.studyMinutes ?? 25);

        const breakHours =
            Number(oldData.breakHours ?? 0);

        const breakMinutes =
            Number(oldData.breakMinutes ?? 5);


        const validStudyHours =
            Number.isFinite(studyHours)
                ? studyHours
                : 0;

        const validStudyMinutes =
            Number.isFinite(studyMinutes)
                ? studyMinutes
                : 25;

        const validBreakHours =
            Number.isFinite(breakHours)
                ? breakHours
                : 0;

        const validBreakMinutes =
            Number.isFinite(breakMinutes)
                ? breakMinutes
                : 5;


        const studyTotal =
            getTotalMinutes(
                validStudyHours,
                validStudyMinutes
            );

        const breakTotal =
            getTotalMinutes(
                validBreakHours,
                validBreakMinutes
            );


        /*
         * Make sure the saved settings
         * are valid.
         */
        let finalStudyHours = validStudyHours;
        let finalStudyMinutes = validStudyMinutes;
        let finalBreakHours = validBreakHours;
        let finalBreakMinutes = validBreakMinutes;

        if (studyTotal <= breakTotal) {

            finalStudyHours = 0;
            finalStudyMinutes = 25;

            finalBreakHours = 0;
            finalBreakMinutes = 5;
        }


        return {

            studyHours: finalStudyHours,

            studyMinutes: finalStudyMinutes,

            breakHours: finalBreakHours,

            breakMinutes: finalBreakMinutes,

            /*
             * Always start in Study mode
             * after changing to the new format.
             */
            mode: "study",

            timeLeft:
                getTotalMinutes(
                    finalStudyHours,
                    finalStudyMinutes
                ) * 60,

            isRunning: false,

            sessionsCompleted:
                Number(oldData.sessionsCompleted) || 0,

            history:
                Array.isArray(oldData.history)
                    ? oldData.history
                    : [],

            theme:
                oldData.theme === "dark"
                    ? "dark"
                    : "light"
        };

    } catch (error) {

        console.error(
            "Could not read saved timer data:",
            error
        );

        return DEFAULT_STATE;
    }
}


function timerReducer(state, action) {

    switch (action.type) {

        case "START":

            return {
                ...state,
                isRunning: true
            };


        case "PAUSE":

            return {
                ...state,
                isRunning: false
            };


        case "SET_STUDY_TIME": {

            const hours =
                Number(action.hours);

            const minutes =
                Number(action.minutes);

            const totalMinutes =
                getTotalMinutes(
                    hours,
                    minutes
                );

            return {
                ...state,

                studyHours: hours,

                studyMinutes: minutes,

                timeLeft:
                    state.mode === "study"
                        ? totalMinutes * 60
                        : state.timeLeft
            };
        }


        case "SET_BREAK_TIME": {

            const hours =
                Number(action.hours);

            const minutes =
                Number(action.minutes);

            const totalMinutes =
                getTotalMinutes(
                    hours,
                    minutes
                );

            return {
                ...state,

                breakHours: hours,

                breakMinutes: minutes,

                timeLeft:
                    state.mode === "break"
                        ? totalMinutes * 60
                        : state.timeLeft
            };
        }


        case "RESET":

            return {
                ...state,

                isRunning: false,

                timeLeft:
                    state.mode === "study"
                        ? getTotalMinutes(
                            state.studyHours,
                            state.studyMinutes
                        ) * 60
                        : getTotalMinutes(
                            state.breakHours,
                            state.breakMinutes
                        ) * 60
            };


        case "TICK":

            return {
                ...state,

                timeLeft:
                    Math.max(
                        0,
                        Number(state.timeLeft) - 1
                    )
            };


        case "SWITCH_MODE": {

            /*
             * Study → Break
             */

            if (state.mode === "study") {

                return {
                    ...state,

                    mode: "break",

                    timeLeft:
                        getTotalMinutes(
                            state.breakHours,
                            state.breakMinutes
                        ) * 60,

                    isRunning: false
                };
            }


            /*
             * Break → Study
             *
             * Record completed session.
             */

            const studyDuration =
                getTotalMinutes(
                    state.studyHours,
                    state.studyMinutes
                );


            const newSession = {

                id: Date.now(),

                type: "Study",

                duration: studyDuration,

                date:
                    new Date().toLocaleString()
            };


            return {
                ...state,

                mode: "study",

                timeLeft:
                    studyDuration * 60,

                isRunning: false,

                sessionsCompleted:
                    state.sessionsCompleted + 1,

                history: [
                    ...state.history,
                    newSession
                ]
            };
        }


        case "TOGGLE_THEME":

            return {
                ...state,

                theme:
                    state.theme === "light"
                        ? "dark"
                        : "light"
            };


        default:

            return state;
    }
}


export function TimerProvider({ children }) {

    const [state, dispatch] =
        useReducer(
            timerReducer,
            null,
            getSavedData
        );


    /*
     * Save the latest state.
     */

    useEffect(() => {

        localStorage.setItem(
            "studyTimerData",
            JSON.stringify(state)
        );

    }, [state]);


    /*
     * Countdown.
     */

    useEffect(() => {

        if (!state.isRunning) {
            return;
        }

        const timer = setInterval(() => {

            if (
                Number(state.timeLeft) <= 1
            ) {

                dispatch({
                    type: "SWITCH_MODE"
                });

            } else {

                dispatch({
                    type: "TICK"
                });

            }

        }, 1000);


        return () => {
            clearInterval(timer);
        };

    }, [
        state.isRunning,
        state.timeLeft
    ]);


    /*
     * Keyboard shortcuts.
     */

    useEffect(() => {

        function handleKeyDown(event) {

            const activeElement =
                document.activeElement;


            if (
                activeElement &&
                (
                    activeElement.tagName === "INPUT" ||
                    activeElement.tagName === "TEXTAREA"
                )
            ) {
                return;
            }


            if (event.code === "Space") {

                event.preventDefault();

                dispatch({
                    type:
                        state.isRunning
                            ? "PAUSE"
                            : "START"
                });
            }


            else if (event.code === "KeyR") {

                dispatch({
                    type: "RESET"
                });
            }


            else if (event.code === "KeyT") {

                dispatch({
                    type: "TOGGLE_THEME"
                });
            }
        }


        document.addEventListener(
            "keydown",
            handleKeyDown
        );


        return () => {

            document.removeEventListener(
                "keydown",
                handleKeyDown
            );

        };

    }, [state.isRunning]);


    return (
        <TimerContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </TimerContext.Provider>
    );
}


export function useTimer() {

    const context =
        useContext(TimerContext);

    if (!context) {

        throw new Error(
            "useTimer must be used inside TimerProvider"
        );
    }

    return context;
}