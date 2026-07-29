# Git Basics

**Goal:** Learn the Git workflow we use every day — branch, commit, push, PR, review.

**References:** [Git & GitHub links](../../docs/references.md#git--github) · [Git cheatsheet](../../docs/git-cheatsheet.md)

---

## Workflow (read this first)

1. **Branch from `master`** — always `git checkout master` → `git pull` → then create your branch
2. **Work on your branch** — commit and push there only
3. **Open PR into `master`** — base branch is always `master`
4. **Mentor reviews** — fix comments if asked, push to the same branch
5. **You merge** — once mentor approves, merge the PR on GitHub
6. **Pull `master` again** — before starting the next task

---

## What to learn

- [ ] Clone a repo and navigate the folder structure
- [ ] Create a branch **from `master`** with the correct naming format
- [ ] Stage, commit, and push changes
- [ ] Open a Pull Request (base: `master`)
- [ ] Update a PR after review feedback
- [ ] Know when to merge (after mentor approval, not before)
- [ ] Explain: `clone`, `branch`, `commit`, `push`, `pull`, `PR`, `merge`

---

## Task 01 — Setup your folder

**Branch:** `intern/<your-name>/setup`

### Learn
- Understand repo layout (`practices/`, `interns/`, `templates/`)
- Know which folder is yours

### Task
Update `interns/<your-name>/README.md` with:
- Your name
- Start date
- One line: what you want to learn (Web / React / Node)

### Submit
- File: `interns/<your-name>/README.md`
- Open a PR into `master` → request review from mentor
- Merge after approval

### Reference
- `interns/_example/README.md`

---

## Task 02 — First daily log

**Branch:** `intern/<your-name>/day-01-log`

### Learn
- Follow the daily log format
- Practice one full commit cycle

### Task
1. Copy `templates/daily-log-template.md` → `interns/<your-name>/daily-logs/day-01.md`
2. Fill in all 4 sections honestly

### Submit
- File: `interns/<your-name>/daily-logs/day-01.md`

### Reference
- `interns/_example/daily-logs/day-01.md`

---

## Task 03 — Practice multiple commits

**Branch:** `intern/<your-name>/day-02-commits`

### Learn
- Make more than one commit on the same branch
- Write clear commit messages

### Task
1. Create `interns/<your-name>/notes.md`
2. Add 3 things you learned (Git, HTML, or CSS)
3. **Commit #1** — add first 1–2 points
4. **Commit #2** — add remaining points + daily log `daily-logs/day-02.md`

### Submit
- Files: `notes.md`, `daily-logs/day-02.md`
- PR should show **2 commits** (not 1)

### Reference
- `interns/_example/notes.md`
- `interns/_example/daily-logs/day-02.md`

---

## Task 04 — Fix a review comment

**Branch:** same branch as a previous PR (or `intern/<your-name>/review-fix`)

### Learn
- Read and act on PR feedback
- Push fixes without opening a new PR

### Task
1. Mentor will leave a comment on one of your PRs (e.g. typo, missing info)
2. Fix it on the **same branch**
3. Push — PR updates automatically
4. Reply: "Fixed" or explain what you changed

### Submit
- Updated files on the existing PR
- A reply to the review comment

---

## Done? Move to Web & JavaScript

When all tasks above are merged and you can explain the Git workflow:

→ [Web & JavaScript](../web-js/)
