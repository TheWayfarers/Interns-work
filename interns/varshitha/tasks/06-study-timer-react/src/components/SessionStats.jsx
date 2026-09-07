import { useMemo } from "react";

import { useTimer } from "../context/TimerContext";
import StatCard from "./StatCard";

function SessionStats() {

    const { state } = useTimer();

    const totalStudyTime = useMemo(() => {

        return state.history.reduce(
            (total, session) =>
                total + Number(session.duration || 0),
            0
        );

    }, [state.history]);

    const formatStudyTime = (minutes) => {

        const hours = Math.floor(minutes / 60);

        const mins = minutes % 60;

        return hours > 0
            ? `${hours}h ${mins}m`
            : `${mins} min`;
    };

    return (
        <section className="stats">

            <StatCard
                title="Completed Sessions"
                value={state.sessionsCompleted}
                icon="🏆"
            />

            <StatCard
                title="Study Time"
                value={formatStudyTime(totalStudyTime)}
                icon="⏱"
            />

            <StatCard
                title="Current Mode"
                value={
                    state.mode === "study"
                        ? "Study"
                        : "Break"
                }
                icon="📚"
            />

        </section>
    );
}

export default SessionStats;