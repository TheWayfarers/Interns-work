import { useTimer } from "../context/TimerContext";

function DurationSettings() {

    const { state, dispatch } = useTimer();

    const studyTotal =
        Number(state.studyHours) * 60 +
        Number(state.studyMinutes);

    const breakTotal =
        Number(state.breakHours) * 60 +
        Number(state.breakMinutes);


    function changeStudyHours(event) {

        const hours = Math.max(
            0,
            Number(event.target.value)
        );

        const newStudyTotal =
            hours * 60 +
            Number(state.studyMinutes);

        if (newStudyTotal <= breakTotal) {
            return;
        }

        dispatch({
            type: "SET_STUDY_TIME",
            hours,
            minutes: state.studyMinutes
        });
    }


    function changeStudyMinutes(event) {

        const minutes = Math.min(
            59,
            Math.max(
                0,
                Number(event.target.value)
            )
        );

        const newStudyTotal =
            Number(state.studyHours) * 60 +
            minutes;

        if (newStudyTotal <= breakTotal) {
            return;
        }

        dispatch({
            type: "SET_STUDY_TIME",
            hours: state.studyHours,
            minutes
        });
    }


    function changeBreakHours(event) {

        const hours = Math.max(
            0,
            Number(event.target.value)
        );

        const newBreakTotal =
            hours * 60 +
            Number(state.breakMinutes);

        if (newBreakTotal >= studyTotal) {
            return;
        }

        dispatch({
            type: "SET_BREAK_TIME",
            hours,
            minutes: state.breakMinutes
        });
    }


    function changeBreakMinutes(event) {

        const minutes = Math.min(
            59,
            Math.max(
                0,
                Number(event.target.value)
            )
        );

        const newBreakTotal =
            Number(state.breakHours) * 60 +
            minutes;

        if (newBreakTotal >= studyTotal) {
            return;
        }

        dispatch({
            type: "SET_BREAK_TIME",
            hours: state.breakHours,
            minutes
        });
    }


    return (
        <div className="duration-box">

            <div className="duration-group">

                <h3>Study Time</h3>

                <div className="time-inputs">

                    <div>
                        <label htmlFor="studyHours">
                            Hours
                        </label>

                        <input
                            id="studyHours"
                            type="number"
                            min="0"
                            value={state.studyHours}
                            onChange={changeStudyHours}
                        />
                    </div>

                    <div>
                        <label htmlFor="studyMinutes">
                            Minutes
                        </label>

                        <input
                            id="studyMinutes"
                            type="number"
                            min="0"
                            max="59"
                            value={state.studyMinutes}
                            onChange={changeStudyMinutes}
                        />
                    </div>

                </div>

            </div>


            <div className="duration-group">

                <h3>Break Time</h3>

                <div className="time-inputs">

                    <div>
                        <label htmlFor="breakHours">
                            Hours
                        </label>

                        <input
                            id="breakHours"
                            type="number"
                            min="0"
                            value={state.breakHours}
                            onChange={changeBreakHours}
                        />
                    </div>

                    <div>
                        <label htmlFor="breakMinutes">
                            Minutes
                        </label>

                        <input
                            id="breakMinutes"
                            type="number"
                            min="0"
                            max="59"
                            value={state.breakMinutes}
                            onChange={changeBreakMinutes}
                        />
                    </div>

                </div>

            </div>


            <p className="duration-rule">
                Break time must be less than study time.
            </p>

        </div>
    );
}

export default DurationSettings;