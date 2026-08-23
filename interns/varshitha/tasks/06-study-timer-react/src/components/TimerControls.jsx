import { useTimer } from "../context/TimerContext";

function TimerControls() {

    const { state, dispatch } = useTimer();

    return (
        <div className="buttons">

            <button
                id="startBtn"
                onClick={() => dispatch({ type: "START" })}
                disabled={state.isRunning}
            >
                ▶ Start
            </button>

            <button
                id="pauseBtn"
                onClick={() => dispatch({ type: "PAUSE" })}
                disabled={!state.isRunning}
            >
                Ⅱ Pause
            </button>

            <button
                id="resetBtn"
                onClick={() => dispatch({ type: "RESET" })}
            >
                ↻ Reset
            </button>

        </div>
    );
}

export default TimerControls;