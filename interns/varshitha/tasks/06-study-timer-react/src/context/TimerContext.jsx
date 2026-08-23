import { createContext, useContext, useEffect, useReducer } from "react";

const TimerContext = createContext();

const getSavedData = () => {
    const savedData = localStorage.getItem("studyTimerData");

    if (savedData) {
        return JSON.parse(savedData);
    }

    return {
        studyMinutes: 25,
        breakMinutes: 5,
        mode: "study",
        timeLeft: 25 * 60,
        isRunning: false,
        sessionsCompleted: 0,
        history: [],
        darkMode: false
    };
};

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

        case "SET_STUDY_TIME":
            return {
                ...state,
                studyMinutes: action.value,
                timeLeft:
                    state.mode === "study"
                        ? action.value * 60
                        : state.timeLeft
            };

        case "SET_BREAK_TIME":
            return {
                ...state,
                breakMinutes: action.value,
                timeLeft:
                    state.mode === "break"
                        ? action.value * 60
                        : state.timeLeft
            };

        case "RESET":
            return {
                ...state,
                isRunning: false,
                timeLeft:
                    state.mode === "study"
                        ? state.studyMinutes * 60
                        : state.breakMinutes * 60
            };

        case "TICK":
            return {
                ...state,
                timeLeft: state.timeLeft - 1
            };

        case "SWITCH_MODE": {
            if (state.mode === "study") {
                return {
                    ...state,
                    mode: "break",
                    timeLeft: state.breakMinutes * 60,
                    isRunning: false
                };
            }

            const newSession = {
                id: Date.now(),
                type: "Study",
                duration: state.studyMinutes,
                date: new Date().toLocaleString()
            };

            return {
                ...state,
                mode: "study",
                timeLeft: state.studyMinutes * 60,
                isRunning: false,
                sessionsCompleted: state.sessionsCompleted + 1,
                history: [...state.history, newSession]
            };
        }

        case "TOGGLE_THEME":
            return {
                ...state,
                darkMode: !state.darkMode
            };

        case "LOAD_DATA":
            return action.data;

        default:
            return state;
    }
}

export function TimerProvider({ children }) {

    const [state, dispatch] = useReducer(
        timerReducer,
        null,
        getSavedData
    );

    useEffect(() => {
        localStorage.setItem(
            "studyTimerData",
            JSON.stringify(state)
        );
    }, [state]);

    useEffect(() => {

        if (!state.isRunning) {
            return;
        }

        const timer = setInterval(() => {

            if (state.timeLeft <= 1) {
                dispatch({ type: "SWITCH_MODE" });
            } else {
                dispatch({ type: "TICK" });
            }

        }, 1000);

        return () => clearInterval(timer);

    }, [state.isRunning, state.timeLeft]);

    useEffect(() => {

        function handleKeyDown(event) {

            if (event.code === "Space") {

                const activeElement = document.activeElement;

                if (
                    activeElement.tagName === "INPUT" ||
                    activeElement.tagName === "TEXTAREA"
                ) {
                    return;
                }

                event.preventDefault();

                if (state.isRunning) {
                    dispatch({ type: "PAUSE" });
                } else {
                    dispatch({ type: "START" });
                }
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };

    }, [state.isRunning]);

    return (
        <TimerContext.Provider value={{ state, dispatch }}>
            {children}
        </TimerContext.Provider>
    );
}

export function useTimer() {
    return useContext(TimerContext);
}