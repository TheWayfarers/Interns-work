import express from "express";
import cors from "cors";
import postsRouter from "./routes/posts.js";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

app.get("/health", (req, res) => {
    res.status(200).json({
        ok: true
    });
});

app.use("/posts", postsRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});