import { useTimer } from "../context/TimerContext";

import DurationSettings from "./DurationSettings";
import TimerControls from "./TimerControls";

function Timer() {

    const { state } = useTimer();

    const hours = Math.floor(
        state.timeLeft / 3600
    );

    const minutes = Math.floor(
        (state.timeLeft % 3600) / 60
    );

    const seconds =
        state.timeLeft % 60;

    const displayHours =
        String(hours).padStart(2, "0");

    const displayMinutes =
        String(minutes).padStart(2, "0");

    const displaySeconds =
        String(seconds).padStart(2, "0");

    const isStudy =
        state.mode === "study";

    return (
        <section className="timer-section">

            <p id="modeLabel">
                {isStudy
                    ? "STUDY TIME"
                    : "BREAK TIME"}
            </p>

            <DurationSettings />

            <div id="timer">
                {displayHours}:
                {displayMinutes}:
                {displaySeconds}
            </div>

            <TimerControls />

            <div className="message">

                {isStudy
                    ? "📚 Stay focused and keep learning!"
                    : "☕ Great work! Take a short break."
                }

            </div>

        </section>
    );
}

export default Timer;