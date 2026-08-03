# Task 03 — Study Timer

**Goal:** Build a Pomodoro-style timer — 25 min study, 5 min break, with Start, Pause, and Reset.

**Branch:** `intern/<your-name>/task-03-study-timer`  
**Folder:** `interns/<your-name>/tasks/03-study-timer/`

Complete [Task 02](../02-contact-book/) first.

---

## Learn

- `setInterval` and `clearInterval`
- Managing UI state (running, paused, mode)
- Updating the DOM every second
- Button enable/disable logic
- CSS for different modes (study vs break)

---

## Build

Create three files: `index.html`, `style.css`, `script.js`.

### HTML

- **Header:** app title
- **Main:**
  - **Mode label:** "Study Time" or "Break Time"
  - **Timer display:** large `MM:SS` format (e.g. `25:00`)
  - **Buttons:** Start | Pause | Reset
  - **Session info:** "Completed sessions: 0"
- **Footer:** your name + date

**Default durations (v1):**

- Study: **25 minutes** (1500 seconds)
- Break: **5 minutes** (300 seconds)

### CSS

- Timer display large and centered
- Study mode — one color (e.g. blue/green)
- Break mode — different color (e.g. orange)
- Buttons styled; show disabled state when needed
- Mobile-friendly layout

### JavaScript

Track state with variables: `timeLeft`, `isRunning`, `mode` (`study` | `break`), `sessionsCompleted`.

**Required behavior:**

- **Start** — begin countdown with `setInterval` (1 second ticks)
- **Pause** — stop interval, keep current time
- **Reset** — stop interval, reset to current mode's default time
- **Tick** — decrease `timeLeft`, update display as `MM:SS` (zero-padded)
- **When timer hits 0:**
  - Stop the interval
  - If study mode → switch to break, set to 5:00
  - If break mode → switch to study, set to 25:00, increment `sessionsCompleted`
  - Show feedback (change label, `alert`, or visual flash)
- **Prevent bugs** — don't start two intervals; handle button spam safely

---

## Checklist (before PR)

- [ ] Timer counts down correctly (watch for ~10 seconds to verify)
- [ ] Start / Pause / Reset all work
- [ ] Study ↔ Break switches when time hits 0
- [ ] Session count increases after a full study → break cycle
- [ ] UI shows current mode clearly
- [ ] Display always shows padded MM:SS
- [ ] Opens in browser via `index.html`
- [ ] Only my folder was changed

---

## Stretch (optional)

- Custom study/break duration inputs
- Sound or visual alert when timer ends
- Save session count to `localStorage`
- Spacebar toggles start/pause

---

## Submit

- **Files:** `index.html`, `style.css`, `script.js` in `interns/<your-name>/tasks/03-study-timer/`
- **Daily log:** what you built + screenshot (timer running + at least 1 completed session)
- **PR:** into `master` → request review → merge after approval

---

## Reference

- [HTML, CSS, JS links](../../docs/references.md)
- [Example folder layout](../../interns/_example/README.md)

**All mini-project tasks complete?** Tell your mentor — next up: React (coming soon).
