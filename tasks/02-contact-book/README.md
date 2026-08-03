# Task 02 — Contact Book

**Goal:** Build a personal contact book — save name, phone, and email; search and delete contacts.

**Branch:** `intern/<your-name>/task-02-contact-book`  
**Folder:** `interns/<your-name>/tasks/02-contact-book/`

Complete [Task 01](../01-expense-tracker/) first.

---

## Learn

- CRUD basics (Create, Read, Delete)
- Search / filter by text
- Form validation
- Rendering lists from a JavaScript array
- Card-based UI

---

## Build

Create three files: `index.html`, `style.css`, `script.js`.

### HTML

- **Header:** app title + contact count (e.g. "5 contacts")
- **Main:**
  - **Form:** Name, Phone, Email, **Add Contact** button
  - **Search:** input with placeholder "Search by name..."
  - **Contact list:** cards or rows render here
- **Footer:** your name + date

### CSS

- Card layout for each contact
- Search bar full-width, styled
- Avatar circle with **first letter** of name (CSS only)
- Delete button on each card
- Responsive on mobile

### JavaScript

Store contacts in an array of objects:

```js
{ id: 1, name: "Alex", phone: "9876543210", email: "alex@email.com" }
```

**Required behavior:**

- **Add** — validate: name not empty, phone not empty, email contains `@`
- **Delete** — remove by id, re-render
- **Search** — filter where name includes search text (case-insensitive)
- **Render** — show name, phone, email on each card
- **Count** — update header when contacts change
- **Empty states:**
  - No contacts: "No contacts saved yet."
  - No search match: "No contacts match your search."

---

## Checklist (before PR)

- [ ] Add contact with validation
- [ ] List updates after add
- [ ] Delete works
- [ ] Search filters by name
- [ ] Contact count in header is correct
- [ ] Both empty states work
- [ ] Styled UI with cards
- [ ] Opens in browser via `index.html`
- [ ] Only my folder was changed

---

## Stretch (optional)

- Edit a contact
- Sort contacts A–Z by name
- Save to `localStorage`
- Phone links use `tel:`, email links use `mailto:`

---

## Submit

- **Files:** `index.html`, `style.css`, `script.js` in `interns/<your-name>/tasks/02-contact-book/`
- **Daily log:** what you built + screenshot (3+ contacts, search demo)
- **PR:** into `master` → request review → merge after approval

---

## Reference

- [HTML, CSS, JS links](../../docs/references.md)
- [Example folder layout](../../interns/_example/README.md)

**Next task:** [Task 03 — Study Timer](../03-study-timer/)
