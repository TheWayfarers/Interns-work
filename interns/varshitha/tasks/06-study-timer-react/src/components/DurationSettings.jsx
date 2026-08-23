import { useTimer } from "../context/TimerContext";

function DurationSettings() {

    const { state, dispatch } = useTimer();

    function changeStudyTime(event) {

        const value = Number(event.target.value);

        if (value < 1) {
            return;
        }

        dispatch({
            type: "SET_STUDY_TIME",
            value
        });
    }

    function changeBreakTime(event) {

        const value = Number(event.target.value);

        if (value < 1) {
            return;
        }

        dispatch({
            type: "SET_BREAK_TIME",
            value
        });
    }

    return (
        <div className="duration-box">

            <div>
                <label htmlFor="studyTime">
                    Study Minutes
                </label>

                <input
                    type="number"
                    id="studyTime"
                    min="1"
                    value={state.studyMinutes}
                    onChange={changeStudyTime}
                />
            </div>

            <div>
                <label htmlFor="breakTime">
                    Break Minutes
                </label>

                <input
                    type="number"
                    id="breakTime"
                    min="1"
                    value={state.breakMinutes}
                    onChange={changeBreakTime}
                />
            </div>

        </div>
    );
}

export default DurationSettings;