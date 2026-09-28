function StatusBanner({ loading, error, empty }) {
    if (loading) {
        return <p className="status">Loading posts...</p>;
    }

    if (error) {
        return <p className="status error">{error}</p>;
    }

    if (empty) {
        return <p className="status">No posts found.</p>;
    }

    return null;
}

export default StatusBanner;