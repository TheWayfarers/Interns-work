# How to work in this repo

## Daily workflow

```
1. git pull                          ← get latest changes
2. git checkout -b intern/<name>/<task>
3. Do your work in interns/<your-name>/
4. git add .
5. git commit -m "Short description of what you did"
6. git push -u origin intern/<name>/<task>
7. Open a Pull Request on GitHub
8. Wait for mentor review → fix if needed → merge
```

## Branch naming

```
intern/pranav/day-01-setup
intern/varshitha/week-01-html-basics
```

Use lowercase names. Keep it short and clear.

## Commit messages

Write what you did, not what you tried:

- ✅ `Add day 01 daily log`
- ✅ `Complete HTML basics exercise`
- ❌ `updated stuff`
- ❌ `fix`

## Rules

1. **Never push directly to `master`**
2. **Only edit your folder** (`interns/<your-name>/`) unless the task says otherwise
3. **One PR per task** — keep changes small and easy to review
4. **Pull before you start** each day to avoid conflicts
5. **Ask before deleting** anything outside your folder

## First-time setup

```bash
git clone https://github.com/TheWayfarers/Interns-work.git
cd Interns-work
git checkout -b intern/<your-name>/setup
```

Then add a short intro in your `interns/<your-name>/README.md`, commit, push, and open your first PR.
