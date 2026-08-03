# Task 01 — Expense Tracker

**Goal:** Build a mini app to track daily spending — add expenses, filter by category, see the total.

**Branch:** `intern/<your-name>/task-01-expense-tracker`  
**Folder:** `interns/<your-name>/tasks/01-expense-tracker/`

---

## Learn

- HTML forms and semantic layout
- External CSS, flexbox, card UI
- JavaScript arrays of objects
- DOM rendering from data
- Filter and reduce (sum totals)
- Form validation and empty states

---

## Build

Create three files: `index.html`, `style.css`, `script.js`.

### HTML

- **Header:** app title + short description
- **Main:**
  - **Form:** Amount (number), Category (dropdown), Note (text), **Add Expense** button
  - **Summary:** total spent + number of entries
  - **Filters:** All | Food | Travel | Shopping | Other
  - **List area:** expenses render here
- **Footer:** your name + date

**Categories (use these):** Food, Travel, Shopping, Other

### CSS

- Link external `style.css`
- Flexbox for form layout
- Each expense as a **card** (amount bold, category badge, note, delete button)
- Different badge color per category
- Footer smaller/lighter text
- Basic responsive layout (form stacks on small screens)

### JavaScript

Store expenses in an array of objects:

```js
{ id: 1, amount: 250, category: "Food", note: "Lunch", date: "2026-08-03" }
```

**Required behavior:**

- **Add** — read form, validate (amount > 0, category selected), push to array, clear form, re-render
- **Delete** — remove by id, re-render
- **Filter** — show All or one category; total updates for visible items
- **Total** — sum of currently visible expenses
- **Empty state** — "No expenses yet. Add your first one above."
- Auto-add today's date on each entry (recommended)

---

## Checklist (before PR)

- [ ] Add expense works with validation
- [ ] Delete removes the correct item
- [ ] Filter by category works
- [ ] Total updates when filtering
- [ ] Empty state shows when list is empty
- [ ] Page is styled (not plain HTML)
- [ ] Opens in browser via `index.html`
- [ ] Only my folder was changed

---

## Stretch (optional)

- Edit an existing expense
- Sort by amount (high → low)
- Save to `localStorage` so data survives refresh
- Simple breakdown by category (% or count)

---

## Submit

- **Files:** `index.html`, `style.css`, `script.js` in `interns/<your-name>/tasks/01-expense-tracker/`
- **Daily log:** what you built + screenshot with at least 3 expenses
- **PR:** into `master` → request review → merge after approval

---

## Reference

- [HTML, CSS, JS links](../../docs/references.md)
- [Example folder layout](../../interns/_example/README.md)
- [DOM example](../../interns/_example/web-js/js-basics/dom/)

**Next task:** [Task 02 — Contact Book](../02-contact-book/)
