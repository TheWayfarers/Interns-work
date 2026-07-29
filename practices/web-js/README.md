# Web & JavaScript

**Goal:** Build a small web page and write JavaScript you can run in Node and in the browser.

Complete Git basics first, then work through these tasks in order.

**References:** [HTML](../../docs/references.md#html) · [CSS](../../docs/references.md#css) · [JavaScript](../../docs/references.md#javascript) · [Tools](../../docs/references.md#tools--setup)

---

## What to learn

### HTML
- [ ] Document structure: `<!DOCTYPE>`, `<html>`, `<head>`, `<body>`
- [ ] Common tags: `h1–h6`, `p`, `a`, `img`, `ul/li`, `div`, `section`
- [ ] Semantic tags: `header`, `main`, `footer`

### CSS
- [ ] Selectors: element, class (`.`), id (`#`)
- [ ] Box model: margin, padding, border
- [ ] Basic layout: flexbox (`display: flex`)
- [ ] Link CSS file to HTML

### JavaScript
- [ ] Variables: `const`, `let`
- [ ] Data types: string, number, boolean, array, object
- [ ] Functions: regular + arrow functions
- [ ] Arrays: `map`, `filter`, `forEach`
- [ ] Objects + destructuring
- [ ] DOM: `getElementById`, `addEventListener`, change text on click
- [ ] Async basics: know what a Promise and `async/await` are

---

## Task 01 — HTML page

**Branch:** `intern/<your-name>/html-basics`

### Learn
- Valid HTML5 page structure
- Semantic sections

### Task
Create `interns/<your-name>/web-js/html-basics/index.html`:
- Page title with your name
- `<header>` with heading + short intro
- `<main>` with at least 2 sections (e.g. About me, Skills I'm learning)
- `<footer>` with date
- One link to an external site (MDN, etc.)

### Submit
- File: `web-js/html-basics/index.html`
- Daily log: `daily-logs/day-01.md` (or next available day)

### Reference
- `interns/_example/web-js/html-basics/index.html`

---

## Task 02 — CSS styling

**Branch:** `intern/<your-name>/css-basics`

### Learn
- External stylesheet linked from HTML
- Class-based styling + flexbox

### Task
1. Create `web-js/html-basics/style.css`
2. Link it in your HTML
3. Style at least:
   - Body background + font
   - One `.card` or section with padding, border-radius, shadow
   - Footer smaller/lighter text
4. Use flexbox in at least one place

### Submit
- Files: `index.html` (updated), `style.css`
- Open `index.html` in browser — it should look styled

### Reference
- `interns/_example/web-js/html-basics/style.css`

---

## Task 03 — JS basics (Node)

**Branch:** `intern/<your-name>/js-basics`

### Learn
- Variables, types, template literals
- Run JS files with `node filename.js`

### Task
Create `web-js/js-basics/basics.js` with:
- 2 variables (`const` name, `let` score)
- 1 array of 3+ skills you're learning
- 1 object with your name and role
- 3+ `console.log` outputs using template literals

Run: `node basics.js` — screenshot or paste output in daily log.

### Submit
- File: `web-js/js-basics/basics.js`
- Daily log mentions what printed in terminal

### Reference
- `interns/_example/web-js/js-basics/basics.js`

---

## Task 04 — Functions & arrays

**Branch:** `intern/<your-name>/js-functions`

### Learn
- Write functions (regular + arrow)
- Use `map` and `filter` on an array

### Task
Create two files:

**`functions.js`**
- 1 regular function (`add` or similar)
- 1 arrow function
- 1 function with a default parameter

**`arrays-objects.js`**
- Array of 4+ items
- Use `.map()` to transform it
- Use `.filter()` to filter it
- 1 object + log one property with destructuring

Run both files with Node.

### Submit
- Files: `web-js/js-basics/functions.js`, `web-js/js-basics/arrays-objects.js`

### Reference
- `interns/_example/web-js/js-basics/functions.js`
- `interns/_example/web-js/js-basics/arrays-objects.js`

---

## Task 05 — JavaScript in the browser (DOM)

**Branch:** `intern/<your-name>/js-dom`

### Learn
- Connect HTML + JS
- Respond to button clicks
- Update page content with JavaScript

### Task
Create `web-js/js-basics/dom/`:
- `index.html` — heading, 2 buttons, `<p id="output">`
- `script.js` — click handlers that change the output text

Minimum: 1 button changes text, 1 button resets it.

### Submit
- Files: `dom/index.html`, `dom/script.js`
- Confirm it works in browser (mention in daily log)

### Reference
- `interns/_example/web-js/js-basics/dom/`

---

## Task 06 — Async basics (read + run)

**Branch:** `intern/<your-name>/js-async`

### Learn
- Understand why async code exists
- Read `async/await` syntax

### Task
1. Copy and run `interns/_example/web-js/js-basics/async-basics.js` into your folder
2. Run with Node — observe print order (Start → End → Loading → Data loaded)
3. In `notes.md`, write **in your own words**:
   - What is a Promise?
   - Why does "End" print before "Data loaded"?

### Submit
- File: `web-js/js-basics/async-basics.js` (your copy)
- Updated `notes.md` with async answers

### Reference
- `interns/_example/web-js/js-basics/async-basics.js`

---

## Task 07 — Wrap-up & self-check

**Branch:** `intern/<your-name>/web-js-wrapup`

### Learn
- Review everything you covered
- Identify gaps to revisit

### Task
1. Update `notes.md` — tick off everything from "What to learn" above
2. Add a daily log:
   - What you're confident in
   - What you need to revise
   - What you want to learn next (React)

### Submit
- Files: `notes.md`, one daily log in `daily-logs/`

---

## All done?

When HTML, CSS, and JS tasks are merged and you can explain each topic:

→ React module (coming soon)
