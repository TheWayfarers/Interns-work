# How to work in this repo

## Branches — where to create from

**Always create a new branch from `master`.**

`master` is the main branch. It should always have the latest approved work. Your task branches are temporary — they exist only until your PR is merged.

```bash
git checkout master        # 1. switch to master
git pull                   # 2. get latest changes
git checkout -b intern/<your-name>/<task>   # 3. create branch FROM master
```

**Do not** create a new branch from another intern's branch or from an old task branch.

```
master  ────────────────────────────────────────►  (main — protected)
          \
           └── intern/pavan/html-basics  ──► PR ──► merge back to master
```

When opening a PR on GitHub:
- **Base branch:** `master` ← merge *into* this
- **Compare branch:** `intern/<your-name>/<task>` ← your work

---

## Who merges — and when

| Action | Who |
|--------|-----|
| Create branch, commit, push | **You** (intern) |
| Open Pull Request | **You** (intern) |
| Review PR, leave comments | **Mentor** |
| Approve or request changes | **Mentor** |
| Merge PR into `master` | **You** (intern) — **only after mentor approval** |

**Merge only when approved.** Do not merge before review.

After you push and open a PR:

1. Request review from your mentor
2. Fix comments if needed → push to the same branch
3. Wait for mentor to **approve**
4. Once approved, **you merge** the PR on GitHub
5. Go back to `master` and `git pull` before starting the next task

---

## Daily workflow

```
1. git checkout master             ← always start from master
2. git pull                        ← get latest merged work
3. git checkout -b intern/<name>/<task>
4. Do your work in interns/<your-name>/
5. git add .
6. git commit -m "Short description of what you did"
7. git push -u origin intern/<name>/<task>
8. Open a Pull Request → base: master
9. Request review from mentor
10. Fix comments if needed → push to same branch
11. Wait for mentor approval → then merge the PR yourself
12. git checkout master && git pull   ← ready for next task
```

## Branch naming

```
intern/pranav/day-01-setup
intern/varshitha/html-basics
```

Use lowercase names. Keep it short and clear.

## Commit messages

Write what you did, not what you tried:

- ✅ `Add day 01 daily log`
- ✅ `Complete HTML basics exercise`
- ❌ `updated stuff`
- ❌ `fix`

## Rules

1. **Never commit or push directly to `master`**
2. **Always branch from latest `master`** — pull first
3. **Merge only after mentor approval** — do not merge before review
4. **Only edit your folder** (`interns/<your-name>/`) unless the task says otherwise
5. **One PR per task** — keep changes small and easy to review
6. **Ask before deleting** anything outside your folder

## First-time setup

```bash
git clone https://github.com/TheWayfarers/Interns-work.git
cd Interns-work
git checkout master
git pull
git checkout -b intern/<your-name>/setup
```

Then add a short intro in your `interns/<your-name>/README.md`, commit, push, and open your first PR (base: `master`).

