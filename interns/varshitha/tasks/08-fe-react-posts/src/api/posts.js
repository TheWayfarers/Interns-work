const API_BASE = "https://jsonplaceholder.typicode.com";

export async function getPosts() {
    const response = await fetch(`${API_BASE}/posts`);

    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }

    return response.json();
}

export async function createPost(post) {
    const response = await fetch(`${API_BASE}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    });

    if (!response.ok) {
        throw new Error("Failed to create post");
    }

    return response.json();
}

export async function deletePost(id) {
    const response = await fetch(`${API_BASE}/posts/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("Failed to delete post");
    }

    return true;
}