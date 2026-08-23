import { useTimer } from "../context/TimerContext";

function SessionStats() {

    const { state } = useTimer();

    const totalStudyTime = state.history.reduce(
        (total, session) => total + session.duration,
        0
    );

    return (
        <section className="stats">

            <div className="stat-card">
                <h3>🏆 Completed Sessions</h3>
                <p>{state.sessionsCompleted}</p>
            </div>

            <div className="stat-card">
                <h3>⏱ Study Time</h3>
                <p>{totalStudyTime} min</p>
            </div>

            <div className="stat-card">
                <h3>📚 Current Mode</h3>
                <p>
                    {state.mode === "study"
                        ? "Study"
                        : "Break"}
                </p>
            </div>

        </section>
    );
}

export default SessionStats;