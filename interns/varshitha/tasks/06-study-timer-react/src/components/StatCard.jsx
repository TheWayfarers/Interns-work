function StatCard({
    title,
    value,
    icon
}) {

    return (
        <div className="stat-card">

            <h3>
                {icon} {title}
            </h3>

            <p>{value}</p>

        </div>
    );
}

export default StatCard;