# Task 06 — BE: Express Posts API

**Track:** Backend  
**Goal:** Build a REST API with Node.js + Express — CRUD for posts, JSON responses, and a simple in-memory or file store.

**Branch:** `intern/<your-name>/task-06-be-express-api`  
**Folder:** `interns/<your-name>/tasks/06-be-express-api/`

Complete [Task 04](../04-posts-feed/) first (understand what a client expects from an API).

You can do this **before or after** [Task 05 (FE)](../05-fe-react-posts/). Same endpoint contract so FE and BE can connect.

---

## Learn

- Node.js project setup (`npm init`, `package.json`)
- Express routes and middleware
- REST: `GET`, `POST`, `PUT`, `DELETE`
- Request params, query, and JSON body
- Status codes (`200`, `201`, `400`, `404`)
- CORS (so a React app on another port can call your API)
- Keeping data in memory or a JSON file (no database required yet)

---

## Build

```bash
npm init -y
npm install express cors
npm install --save-dev nodemon
```

Add scripts to `package.json`:

```json
{
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js"
  }
}
```

### Suggested structure

```
06-be-express-api/
├── package.json
├── .gitignore              ← node_modules/
├── data/
│   └── posts.json          ← seed data (optional)
└── src/
    ├── server.js           ← app listen, middleware
    ├── routes/
    │   └── posts.js        ← /posts routes
    └── store.js            ← read/write posts array
```

### Seed data shape

```json
[
  {
    "id": 1,
    "title": "Hello API",
    "body": "First post from the server",
    "createdAt": "2026-09-22T10:00:00.000Z"
  }
]
```

Include at least **3 seed posts**.

---

### API contract (must implement)

Base URL: `http://localhost:3001`

| Method | Path | Body | Response |
|--------|------|------|----------|
| `GET` | `/posts` | — | `200` + array of posts |
| `GET` | `/posts/:id` | — | `200` + one post, or `404` |
| `POST` | `/posts` | `{ "title": "...", "body": "..." }` | `201` + created post |
| `PUT` | `/posts/:id` | `{ "title": "...", "body": "..." }` | `200` + updated post, or `404` |
| `DELETE` | `/posts/:id` | — | `204` empty, or `404` |

**Also required:**

- `GET /health` → `{ "ok": true }` (quick smoke test)
- **CORS enabled** (`cors` package) so FE on `localhost:5173` works
- Validate `POST` / `PUT`: reject empty `title` with `400` + `{ "error": "title is required" }`
- Auto-generate `id` (number or string) and `createdAt` on create
- Log each request method + path in the console (simple middleware)

### Query (nice, required for list)

- `GET /posts?q=hello` — filter posts where title contains `q` (case-insensitive)

---

### Example requests (test with browser / curl / Thunder Client)

```bash
# Health
curl http://localhost:3001/health

# List
curl http://localhost:3001/posts

# Create
curl -X POST http://localhost:3001/posts \
  -H "Content-Type: application/json" \
  -d '{"title":"New post","body":"Created via API"}'

# Delete
curl -X DELETE http://localhost:3001/posts/1
```

---

## Checklist (before PR)

- [ ] `npm run dev` starts the server on port **3001**
- [ ] All 5 CRUD routes work (test with curl or Thunder Client)
- [ ] `GET /health` works
- [ ] Validation returns `400` when title is missing
- [ ] Unknown id returns `404`
- [ ] CORS is enabled
- [ ] Search query `?q=` works
- [ ] Seed data loads on start
- [ ] `node_modules/` is **not** committed
- [ ] Only my folder was changed

---

## Stretch (optional)

- Persist changes to `data/posts.json` on every write (survive restart)
- Separate `controllers` folder
- Rate-limit or artificial delay (simulate slow network)
- Connect [Task 05 FE](../05-fe-react-posts/) by setting `API_BASE=http://localhost:3001`
- Add `PATCH` for partial updates

---

## Submit

- **Folder:** `interns/<your-name>/tasks/06-be-express-api/`
- **Include:** source + `package.json` + `.gitignore` + seed data (not `node_modules`)
- **Daily log:** paste sample `curl` responses (list + create); note how you tested
- **PR:** into `master` → review → merge after approval

---

## Reference

- [Express guide](https://expressjs.com/en/starter/installing.html)
- [Full Stack Open — Part 3](https://fullstackopen.com/en/part3)
- [Node videos](../../docs/references.md#nodejs-when-you-reach-this-module)
- [Task 05 — FE React](../05-fe-react-posts/) (same endpoints)

**Also try:** [Task 05 — FE: React Posts App](../05-fe-react-posts/)
