# Learning Path

Topics to cover, in order. Follow `practices/` for exact tasks. **No fixed timeline** — move on when you're comfortable with the current topic.

---

## 1. Git & workflow

**Focus:** How we work in this repo.

| Cover | Outcome |
|-------|---------|
| Clone, branch, commit, push | Can work without breaking `master` |
| Pull Requests & review | Can submit work for mentor review |
| Daily logs | Can track learning every day |

→ [Git basics tasks](../practices/git-basics/)

**Learn:** [Git & GitHub links](references.md#git--github)

---

## 2. HTML, CSS & JavaScript

**Focus:** Web foundations before React.

| Cover | Outcome |
|-------|---------|
| HTML structure & semantic tags | Build a valid page |
| CSS selectors, box model, flexbox | Style your page |
| JS variables, functions, arrays | Run scripts with Node |
| DOM & events | Make page interactive in browser |
| Async basics | Understand promises & `async/await` |

→ [Web & JS tasks](../practices/web-js/)

**Learn:** [HTML](references.md#html) · [CSS](references.md#css) · [JavaScript](references.md#javascript) · [Full Stack Open Part 0](https://fullstackopen.com/en/part0)

---

## 3. Mini-projects (HTML + CSS + JS)

**Focus:** Build real small apps in the browser — one task at a time.

| # | Project | Outcome |
|---|---------|---------|
| 01 | Expense Tracker | Forms, arrays, filter, totals |
| 02 | Contact Book | CRUD, search, validation |
| 03 | Study Timer | Intervals, state, DOM updates |
| 04 | Posts Feed | Mock API, fetch, async/await, render |

→ [Mini-project tasks](../tasks/)

**Learn:** [HTML, CSS, JS references](references.md) · [Video tutorials](references.md#video-references-free)

---

## 4. Frontend (React)

**Focus:** Components, state, and calling APIs.

| # | Project | Outcome |
|---|---------|---------|
| 05 | FE: React Posts App | Components, `useEffect`, fetch, forms |

→ [Task 05](../tasks/05-fe-react-posts/)

**Learn:** [React links](references.md#react-when-you-reach-this-module) · [Full Stack Open Part 1–2](https://fullstackopen.com/en/part1)

---

## 5. Backend (Node + Express)

**Focus:** REST API on the server.

| # | Project | Outcome |
|---|---------|---------|
| 06 | BE: Express Posts API | Routes, CRUD, CORS, status codes |

→ [Task 06](../tasks/06-be-express-api/)

**Learn:** [Node.js links](references.md#nodejs-when-you-reach-this-module) · [Full Stack Open Part 3](https://fullstackopen.com/en/part3)

**Connect FE + BE:** Point Task 05 `API_BASE` to `http://localhost:3001` after Task 06 runs.

---

## Daily habit

Whenever you work:

1. `git checkout master && git pull` — start from latest
2. New branch from `master` for today's task
3. Pick the next task from `practices/` or `tasks/`
4. Add or update a daily log in your folder
5. Push + open PR into `master`
6. Get mentor approval → then merge the PR
7. Pull `master` again before the next task

---

## References

- Examples: `interns/_example/`
- **Mini-projects:** [tasks/](../tasks/)
- **Learn & reference links:** [references.md](references.md) — includes [Full Stack Open](https://fullstackopen.com/en/)
- Git commands: [git-cheatsheet.md](git-cheatsheet.md)
- Workflow: [CONTRIBUTING.md](../CONTRIBUTING.md)
