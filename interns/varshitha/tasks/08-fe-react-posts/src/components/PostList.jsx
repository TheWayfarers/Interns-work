import PostCard from "./PostCard";

function PostList({ posts, onSelect, onDelete }) {
    return (
        <div className="post-list">
            {posts.map((post) => (
                <PostCard
                    key={post.id}
                    post={post}
                    onSelect={onSelect}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default PostList;