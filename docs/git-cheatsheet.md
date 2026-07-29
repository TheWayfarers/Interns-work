# Git Cheatsheet

## Setup (once)

```bash
git clone https://github.com/TheWayfarers/Interns-work.git
cd Interns-work
```

## Before every new task

**Always branch from `master`.** Never from an old task branch.

```bash
git checkout master     # go to main branch
git pull                # get latest merged work
git checkout -b intern/<your-name>/<task-name>
```

Example:

```bash
git checkout master
git pull
git checkout -b intern/pavan/setup
```

## Save your work

```bash
git status                  # see what changed
git add .                   # stage all changes
git commit -m "Your message"
git push -u origin intern/<your-name>/<task-name>
```

## Open a Pull Request

Go to GitHub → **Pull requests** → **New pull request**

- **Base:** `master` ← your work merges into here
- **Compare:** `intern/<your-name>/<task>` ← your branch
- Request review from mentor
- **Merge only after approval** — then click Merge on GitHub

## After your PR is merged

```bash
git checkout master
git pull                    # now includes your merged work
```

Then start the next task with a fresh branch from `master`.

## Useful commands

```bash
git status                  # what changed?
git log --oneline -5        # recent commits
git diff                    # see unstaged changes
git branch                  # list your branches
```

## If something goes wrong

```bash
git checkout .              # undo unstaged changes (careful!)
git stash                   # temporarily save changes
git stash pop               # bring stashed changes back
```

Ask your mentor before running anything you're unsure about.

**More links:** [references.md](references.md) — HTML, CSS, JS, React, Node, tools

