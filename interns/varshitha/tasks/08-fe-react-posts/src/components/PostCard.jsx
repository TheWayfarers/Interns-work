function PostCard({ post, onSelect, onDelete }) {
    return (
        <article className="post-card">
            <h2>{post.title}</h2>

            <p>
                {post.body.length > 120
                    ? `${post.body.slice(0, 120)}...`
                    : post.body}
            </p>

            <div className="post-actions">
                <button onClick={() => onSelect(post)}>
                    View
                </button>

                <button onClick={() => onDelete(post.id)}>
                    Delete
                </button>
            </div>
        </article>
    );
}

export default PostCard;