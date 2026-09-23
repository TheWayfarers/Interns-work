# Task 04 — Posts Feed (Fetch & Render)

**Goal:** Build a posts feed that loads data asynchronously — mock API first, then render cards with loading and error states.

**Branch:** `intern/<your-name>/task-04-posts-feed`  
**Folder:** `interns/<your-name>/tasks/04-posts-feed/`

Complete [Task 03](../03-study-timer/) first.

---

## Learn

- `fetch()` and reading JSON responses
- `async` / `await` and Promises in real UI flow
- Mock API (simulate network delay without a backend)
- Loading, error, and empty UI states
- Render a list from API data (not hardcoded HTML)
- Search/filter fetched data
- Detail view from list click

---

## Build

Create four files: `index.html`, `style.css`, `script.js`, `mock-api.js`.

### File structure

```
tasks/04-posts-feed/
├── index.html
├── style.css
├── script.js      ← UI logic, fetch, render
└── mock-api.js    ← fake API with delay
```

Load scripts in HTML: `mock-api.js` first, then `script.js`.

---

### HTML

- **Header:** app title + short description
- **Main:**
  - **Controls:** Search input ("Search by title...") + **Reload** button
  - **Status area:** loading message / error message (hidden when not needed)
  - **Posts grid:** container where cards render (`#posts-list`)
  - **Detail panel:** shows full post when a card is clicked (`#post-detail`)
- **Footer:** your name + date

---

### CSS

- Card grid (flexbox or CSS grid) — responsive (1 col mobile, 2–3 cols desktop)
- Post card: title (truncated), body preview (2–3 lines), post id
- **Loading** state styled (spinner or pulsing text)
- **Error** state styled (red/warning box)
- Detail panel distinct from list (border, background)
- Empty search results message

---

### mock-api.js

Simulate a real API. Export behavior via a global function (no modules required):

```js
function fetchPostsMock() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, userId: 1, title: "...", body: "..." },
        // at least 6 mock posts
      ]);
    }, 1500); // simulate network delay
  });
}
```

**Required:**
- At least **6 mock posts** with `id`, `userId`, `title`, `body`
- **1.5 second delay** so loading state is visible
- Optional: `fetchPostsMockFail()` for testing error UI (reject with an error)

---

### script.js

**Required behavior:**

1. **On page load** — call `loadPosts()`:
   - Show loading state
   - Hide error and list
   - `await fetchPostsMock()` (use `async/await`)
   - On success → render posts, hide loading
   - On failure → show error message, hide loading

2. **Render posts** — build card HTML from data and insert into `#posts-list`:
   - Use `map()` + `join('')` or `createElement` (either is fine)
   - Do **not** hardcode post cards in HTML

3. **Search** — filter rendered posts by title (case-insensitive) as user types

4. **Click card** — show full title + body in `#post-detail`

5. **Reload button** — fetch again (show loading each time)

6. **Empty states:**
   - No posts from API: "No posts found."
   - Search with no match: "No posts match your search."

**Use `async/await`** — not only `.then()` chains.

---

### Real API (required part of task)

Add a function that fetches live data:

```js
async function fetchPostsLive() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=20");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
}
```

- Add a toggle, button, or config flag: **Mock** vs **Live API**
- Default can be Mock; Live must work when selected
- **Tip:** use VS Code **Live Server** extension when testing Live API (avoids browser file restrictions)

---

## Checklist (before PR)

- [ ] `mock-api.js` has delayed mock fetch with 6+ posts
- [ ] Loading state shows while fetching
- [ ] Error state shows when fetch fails (test with mock fail or bad URL)
- [ ] Posts render from JS array (not hardcoded in HTML)
- [ ] Search filters by title
- [ ] Click shows full post in detail panel
- [ ] Reload button re-fetches data
- [ ] Live API fetch to JSONPlaceholder works
- [ ] Uses `async/await`
- [ ] Opens in browser (Live Server recommended for Live API)
- [ ] Only my folder was changed

---

## Stretch (optional)

- Pagination ("Load more" — fetch `?_start=20&_limit=10`)
- Fetch single post: `GET /posts/:id`
- Skeleton loading cards instead of plain text
- Debounce search input (wait 300ms before filtering)
- Show post count: "Showing 12 of 20 posts"

---

## Submit

- **Files:** `index.html`, `style.css`, `script.js`, `mock-api.js`
- **Folder:** `interns/<your-name>/tasks/04-posts-feed/`
- **Daily log:** explain mock vs live API + screenshot (loading, list, detail view)
- **PR:** into `master` → request review → merge after approval

---

## Reference

- [MDN — fetch](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch)
- [MDN — async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
- [JSONPlaceholder — posts API](https://jsonplaceholder.typicode.com/posts)
- [HTML, CSS, JS links](../../docs/references.md)
- [Example folder layout](../../interns/_example/README.md)

**Next:** Try both tracks — [Task 05 FE (React)](../05-fe-react-posts/) and [Task 06 BE (Express)](../06-be-express-api/).
