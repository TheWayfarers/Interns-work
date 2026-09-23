# Mini-Projects (Tasks)

Full projects for **HTML/CSS/JS**, then **Frontend (React)** and **Backend (Express)**.  
**Complete one task at a time** — merge before starting the next.

## Basics track (vanilla web)

| # | Task | |
|---|------|---|
| 01 | [Expense Tracker](01-expense-tracker/) | Add, filter, and total daily expenses |
| 02 | [Contact Book](02-contact-book/) | Save, search, and delete contacts |
| 03 | [Study Timer](03-study-timer/) | Pomodoro-style study & break timer |
| 04 | [Posts Feed](04-posts-feed/) | Mock API, fetch, loading/error, render |

Do **01 → 02 → 03 → 04** in order.

---

## FE & BE track (try both)

After Task 04, try **Frontend** and **Backend**. Same Posts API contract — you can connect them later.

| # | Task | Track | |
|---|------|-------|---|
| 05 | [FE: React Posts App](05-fe-react-posts/) | Frontend | React, fetch, components, forms |
| 06 | [BE: Express Posts API](06-be-express-api/) | Backend | Express, REST CRUD, CORS |

**Order:** Either 05 then 06, or 06 then 05. Ideal goal: FE (`localhost:5173`) talks to your BE (`localhost:3001`).

```
Task 04 (vanilla fetch)
        │
        ├──► Task 05 FE (React) ──┐
        │                         ├──► connect via same /posts API
        └──► Task 06 BE (Express) ┘
```

---

## Where to put your work

```
interns/<your-name>/tasks/05-fe-react-posts/
interns/<your-name>/tasks/06-be-express-api/
```

Only edit **your own** folder under `interns/<your-name>/`.

For React/Node projects: commit source + `package.json`, **never** commit `node_modules/`.

---

## Git workflow (every task)

1. `git checkout master && git pull`
2. `git checkout -b intern/<your-name>/task-05-fe-react-posts` (change per task)
3. Build in `interns/<your-name>/tasks/...`
4. Commit, push, open PR into `master`
5. Request mentor review → fix comments if needed
6. Merge **after approval**
7. Pull `master` again before the next task

See [CONTRIBUTING.md](../CONTRIBUTING.md).

---

## Each task file includes

- **Goal** — what you build
- **Learn** — concepts covered
- **Build** — requirements
- **Checklist** — self-review before PR
- **Stretch** — optional extras
- **Submit** — what to hand in

---

## Before you start

- Basics: [practices/](../practices/)
- Learn & links: [docs/references.md](../docs/references.md)
- Examples: [interns/_example/](../interns/_example/)

Vanilla tasks: open `index.html` in the browser (Live Server for Task 04 live API).  
FE: `npm run dev`. BE: `npm run dev` on port **3001**.
