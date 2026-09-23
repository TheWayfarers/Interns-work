# Task 05 — FE: React Posts App

**Track:** Frontend  
**Goal:** Build a React app that fetches and manages posts — components, state, loading/error UI, and API calls.

**Branch:** `intern/<your-name>/task-05-fe-react-posts`  
**Folder:** `interns/<your-name>/tasks/05-fe-react-posts/`

Complete [Task 04](../04-posts-feed/) first (fetch + render basics).

You can do this **before or after** [Task 06 (BE)](../06-be-express-api/). Start with a public API; later connect to your own backend.

---

## Learn

- React components, props, and `useState`
- `useEffect` for data fetching on mount
- Loading / error / empty UI in React
- Controlled forms (add / edit post)
- Calling REST APIs with `fetch` + `async/await`
- Separating UI components from API helpers

---

## Build

Use **Vite + React** (JavaScript is fine; TypeScript optional).

```bash
npm create vite@latest . -- --template react
npm install
npm run dev
```

### Suggested structure

```
05-fe-react-posts/
├── package.json
├── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── api/
│   │   └── posts.js          ← all fetch calls here
│   ├── components/
│   │   ├── PostList.jsx
│   │   ├── PostCard.jsx
│   │   ├── PostForm.jsx
│   │   ├── PostDetail.jsx
│   │   └── StatusBanner.jsx  ← loading / error messages
│   └── App.css
└── README.md                 ← how to run (optional)
```

---

### Features (must have)

1. **List posts** — fetch on load, render cards (title + body preview)
2. **Loading & error** — show while fetching / if request fails
3. **Search** — filter by title (client-side)
4. **Detail** — click a card → show full post
5. **Create** — form to add a new post (`title`, `body`) via `POST`
6. **Delete** — remove a post via `DELETE` (or hide locally if API is read-only)
7. **API helper file** — no raw `fetch` scattered only inside JSX; use `src/api/posts.js`

### API base URL

Put the base URL in one place (constant or `.env`):

```js
// Start with public API
const API_BASE = "https://jsonplaceholder.typicode.com";

// Later (after Task 06): point to your Express API
// const API_BASE = "http://localhost:3001";
```

**Expected endpoints** (same contract as Task 06):

| Method | Path | Purpose |
|--------|------|---------|
| `GET` | `/posts` | List posts |
| `GET` | `/posts/:id` | One post (optional) |
| `POST` | `/posts` | Create `{ title, body }` |
| `DELETE` | `/posts/:id` | Delete post |

JSONPlaceholder supports GET/POST (fake DELETE). When you switch to your BE, real DELETE should work.

---

## Checklist (before PR)

- [ ] Vite React app runs with `npm run dev`
- [ ] Posts load from API into components
- [ ] Loading and error states work
- [ ] Search filters the list
- [ ] Detail view works
- [ ] Create form posts to the API and updates the list
- [ ] Fetch logic lives in `src/api/posts.js` (or similar)
- [ ] `API_BASE` is easy to change for local BE
- [ ] Only my folder was changed
- [ ] `node_modules/` is **not** committed (use `.gitignore`)

---

## Stretch (optional)

- Edit post (`PUT` / `PATCH`)
- Connect to your Task 06 Express API on `localhost`
- TypeScript
- React Router (`/` list, `/posts/:id` detail)
- Optimistic UI (update list before API responds)

---

## Submit

- **Folder:** `interns/<your-name>/tasks/05-fe-react-posts/`
- **Include:** source files + `package.json` + `.gitignore` (not `node_modules`)
- **Daily log:** screenshot of list + create flow; note which `API_BASE` you used
- **PR:** into `master` → review → merge after approval

---

## Reference

- [React docs](https://react.dev/learn)
- [Vite guide](https://vite.dev/guide/)
- [Full Stack Open — Part 1–2](https://fullstackopen.com/en/part1)
- [Task 06 — BE API](../06-be-express-api/) (same endpoints)
- [docs/references.md](../../docs/references.md)

**Also try:** [Task 06 — BE: Express Posts API](../06-be-express-api/)
