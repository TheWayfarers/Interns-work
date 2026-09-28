import { useEffect, useState } from "react";
import { getPosts, createPost, deletePost } from "./api/posts";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostDetail from "./components/PostDetail";
import StatusBanner from "./components/StatusBanner";
import "./App.css";

function App() {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedPost, setSelectedPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function loadPosts() {
        try {
            setLoading(true);
            setError("");

            const data = await getPosts();
            setPosts(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadPosts();
    }, []);

    async function handleCreate(post) {
        try {
            setError("");

            const newPost = await createPost(post);

            setPosts((currentPosts) => [
                {
                    ...newPost,
                    id: Date.now()
                },
                ...currentPosts
            ]);
        } catch (error) {
            setError(error.message);
        }
    }

    async function handleDelete(id) {
        try {
            setError("");

            await deletePost(id);

            setPosts((currentPosts) =>
                currentPosts.filter((post) => post.id !== id)
            );

            if (selectedPost?.id === id) {
                setSelectedPost(null);
            }
        } catch (error) {
            setError(error.message);
        }
    }

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="app">
            <header className="app-header">
                <h1>Posts App</h1>
                <p>React Posts Management</p>
            </header>

            <main className="container">
                <PostForm onCreate={handleCreate} />

                <input
                    className="search"
                    type="text"
                    placeholder="Search posts by title..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />

                <StatusBanner
                    loading={loading}
                    error={error}
                    empty={!loading && filteredPosts.length === 0}
                />

                {!loading && !error && filteredPosts.length > 0 && (
                    <PostList
                        posts={filteredPosts}
                        onSelect={setSelectedPost}
                        onDelete={handleDelete}
                    />
                )}

                <PostDetail
                    post={selectedPost}
                    onClose={() => setSelectedPost(null)}
                />
            </main>
        </div>
    );
}

export default App;