import { useTimer } from "../context/TimerContext";

function Settings() {

    const { state, dispatch } = useTimer();

    return (
        <section className="page-card">

            <h2>Settings</h2>

            <div className="settings-row">

                <div>
                    <h3>Theme</h3>
                    <p>
                        Change between light and dark mode.
                    </p>
                </div>

                <button
                    className="theme-btn"
                    onClick={() =>
                        dispatch({ type: "TOGGLE_THEME" })
                    }
                >
                    {state.darkMode
                        ? "☀️ Light Mode"
                        : "🌙 Dark Mode"}
                </button>

            </div>

            <div className="settings-info">

                <h3>Timer Settings</h3>

                <p>
                    Study Duration: {state.studyMinutes} minutes
                </p>

                <p>
                    Break Duration: {state.breakMinutes} minutes
                </p>

                <p>
                    Completed Sessions: {state.sessionsCompleted}
                </p>

            </div>

        </section>
    );
}

export default Settings;