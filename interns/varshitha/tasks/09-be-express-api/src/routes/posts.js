import express from "express";
import { getPosts, savePosts } from "../store.js";

const router = express.Router();

router.get("/", (req, res) => {
    const posts = getPosts();
    const search = req.query.q;

    if (search) {
        const filteredPosts = posts.filter((post) =>
            post.title.toLowerCase().includes(search.toLowerCase())
        );

        return res.status(200).json(filteredPosts);
    }

    res.status(200).json(posts);
});

router.get("/:id", (req, res) => {
    const posts = getPosts();
    const id = Number(req.params.id);

    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(404).json({
            error: "Post not found"
        });
    }

    res.status(200).json(post);
});

router.post("/", (req, res) => {
    const { title, body } = req.body;

    if (!title || !title.trim()) {
        return res.status(400).json({
            error: "title is required"
        });
    }

    const posts = getPosts();

    const newPost = {
        id: posts.length > 0 ? Math.max(...posts.map((post) => post.id)) + 1 : 1,
        title: title.trim(),
        body: body || "",
        createdAt: new Date().toISOString()
    };

    posts.push(newPost);
    savePosts(posts);

    res.status(201).json(newPost);
});

router.put("/:id", (req, res) => {
    const posts = getPosts();
    const id = Number(req.params.id);
    const { title, body } = req.body;

    if (!title || !title.trim()) {
        return res.status(400).json({
            error: "title is required"
        });
    }

    const index = posts.findIndex((post) => post.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: "Post not found"
        });
    }

    posts[index] = {
        ...posts[index],
        title: title.trim(),
        body: body || ""
    };

    savePosts(posts);

    res.status(200).json(posts[index]);
});

router.delete("/:id", (req, res) => {
    const posts = getPosts();
    const id = Number(req.params.id);

    const index = posts.findIndex((post) => post.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: "Post not found"
        });
    }

    posts.splice(index, 1);
    savePosts(posts);

    res.status(204).send();
});

export default router;