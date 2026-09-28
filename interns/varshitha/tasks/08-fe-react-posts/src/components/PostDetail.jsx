function PostDetail({ post, onClose }) {
    if (!post) {
        return null;
    }

    return (
        <section className="post-detail">
            <div className="detail-header">
                <h2>Post Details</h2>

                <button onClick={onClose}>
                    Close
                </button>
            </div>

            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </section>
    );
}

export default PostDetail;