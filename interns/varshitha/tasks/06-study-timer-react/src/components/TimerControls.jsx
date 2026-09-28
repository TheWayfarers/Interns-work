import { useCallback } from "react";

import { useTimer } from "../context/TimerContext";
import Button from "./Button";

function TimerControls() {

    const { state, dispatch } = useTimer();

    const handleStart = useCallback(() => {

        dispatch({
            type: "START"
        });

    }, [dispatch]);

    const handlePause = useCallback(() => {

        dispatch({
            type: "PAUSE"
        });

    }, [dispatch]);

    const handleReset = useCallback(() => {

        dispatch({
            type: "RESET"
        });

    }, [dispatch]);

    return (
        <div className="buttons">

            <Button
                onClick={handleStart}
                disabled={state.isRunning}
                className="start-button"
            >
                ▶ Start
            </Button>

            <Button
                onClick={handlePause}
                disabled={!state.isRunning}
            >
                Ⅱ Pause
            </Button>

            <Button
                onClick={handleReset}
            >
                ↻ Reset
            </Button>

        </div>
    );
}

export default TimerControls;