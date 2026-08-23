import { useTimer } from "../context/TimerContext";

function History() {

    const { state } = useTimer();

    return (
        <section className="page-card">

            <h2>Study History</h2>

            {state.history.length === 0 ? (

                <div className="empty-state">
                    <h3>No study sessions yet.</h3>
                    <p>Complete a study session to see it here.</p>
                </div>

            ) : (

                <div className="history-list">

                    {state.history
                        .slice()
                        .reverse()
                        .map((session) => (

                            <div
                                className="history-card"
                                key={session.id}
                            >

                                <div>
                                    <h3>📚 {session.type}</h3>
                                    <p>{session.date}</p>
                                </div>

                                <strong>
                                    {session.duration} min
                                </strong>

                            </div>

                        ))}

                </div>
            )}

        </section>
    );
}

export default History;