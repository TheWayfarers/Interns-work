import { useState } from "react";

function PostForm({ onCreate }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        if (!title.trim() || !body.trim()) {
            return;
        }

        await onCreate({
            title: title.trim(),
            body: body.trim()
        });

        setTitle("");
        setBody("");
    }

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <h2>Create Post</h2>

            <input
                type="text"
                placeholder="Post title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            <textarea
                placeholder="Post body"
                value={body}
                onChange={(event) => setBody(event.target.value)}
                rows="5"
            />

            <button type="submit">
                Add Post
            </button>
        </form>
    );
}

export default PostForm;