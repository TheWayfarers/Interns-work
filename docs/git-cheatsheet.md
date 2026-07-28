# Git Cheatsheet

## Setup (once)

```bash
git clone https://github.com/TheWayfarers/Interns-work.git
cd Interns-work
```

## Every day — before you start

```bash
git checkout master
git pull
```

## Start a new task

```bash
git checkout -b intern/<your-name>/<task-name>
```

Example:

```bash
git checkout -b intern/pavan/day-01-setup
```

## Save your work

```bash
git status                  # see what changed
git add .                   # stage all changes
git commit -m "Your message"
git push -u origin intern/<your-name>/<task-name>
```

## After first push — open a PR on GitHub

Go to the repo on GitHub → **Pull requests** → **New pull request**

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
