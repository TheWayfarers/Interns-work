import { useTimer } from "../context/TimerContext";

function Settings() {

    const { state, dispatch } = useTimer();

    const studyTotal =
        state.studyHours * 60 +
        state.studyMinutes;

    const breakTotal =
        state.breakHours * 60 +
        state.breakMinutes;

    return (
        <section className="page-card">

            <h2>Settings</h2>

            <div className="settings-row">

                <div>

                    <h3>Theme</h3>

                    <p>
                        Change between light
                        and dark mode.
                    </p>

                </div>

                <button
                    className="theme-btn"
                    onClick={() =>
                        dispatch({
                            type: "TOGGLE_THEME"
                        })
                    }
                >
                    {state.theme === "dark"
                        ? "☀️ Light Mode"
                        : "🌙 Dark Mode"}
                </button>

            </div>

            <div className="settings-info">

                <h3>
                    Timer Settings
                </h3>

                <p>
                    Study Duration:{" "}
                    {studyTotal} minutes
                </p>

                <p>
                    Break Duration:{" "}
                    {breakTotal} minutes
                </p>

                <p>
                    Completed Sessions:{" "}
                    {state.sessionsCompleted}
                </p>

                <hr />

                <h3>
                    Keyboard Shortcuts
                </h3>

                <p>
                    Space → Start / Pause
                </p>

                <p>
                    R → Reset
                </p>

                <p>
                    T → Toggle Theme
                </p>

            </div>

        </section>
    );
}

export default Settings;