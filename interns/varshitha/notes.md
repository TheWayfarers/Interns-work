# Learning Notes

## Git

- `git clone <repo-url>` — download a repository from GitHub
- `git status` — check the current state of your repository
- `Stage` — prepare changes before committing
- `git pull origin main` — get the latest changes from GitHub
- `git checkout -b branch-name` — create and switch to a new branch
- `git branch` — list all local branches
- `git switch branch-name` — switch to an existing branch
- `git add .` — stage all changed files
- `git commit -m "message"` — save your changes with a commit message
- `git push -u origin branch-name` — upload your branch to GitHub
- `git log` — view commit history
- `git diff` — compare changes before committing
- `Pull Request (PR)` — request your mentor to review and merge your code
- `Merge` — combine changes from one branch into another

---

## HTML

- `<!DOCTYPE html>` — tells the browser this is an HTML5 document
- `<html>` — root element of the webpage
- `<head>` — contains metadata, title, CSS links, favicon
- `<body>` — contains all visible webpage content
- `<title>` — sets the browser tab title
- `<meta>` — provides information about the webpage
- `<link>` — connects external CSS files
- `<script>` — connects JavaScript files

### Common Tags

- `<h1>` to `<h6>` — headings
- `<p>` — paragraph
- `<a>` — hyperlink
- `<img>` — display an image
- `<button>` — clickable button
- `<input>` — user input field
- `<form>` — collect user input
- `<label>` — label for form elements
- `<ul>` / `<ol>` — unordered / ordered lists
- `<li>` — list item
- `<table>` — create tables
- `<div>` — generic block container
- `<span>` — generic inline container
- `<br>` — line break
- `<hr>` — horizontal line

### Semantic Tags

- `<header>` — top section of a page
- `<nav>` — navigation links
- `<main>` — main content
- `<section>` — related content section
- `<article>` — independent content
- `<aside>` — sidebar content
- `<footer>` — bottom section of a page

### Attributes

- `id` — unique identifier
- `class` — reusable styling group
- `src` — image or script source
- `href` — hyperlink destination
- `alt` — alternative text for images
- `target="_blank"` — open link in a new tab

---

## CSS

- Selector `{ property: value; }` — basic CSS syntax
- `class="card"` → `.card` — style reusable elements
- `id="box"` → `#box` — style a unique element
- `*` — universal selector
- `element` — select HTML tags directly

### Colors & Units

- `color` — text color
- `background-color` — background color
- `px`, `%`, `rem` — common CSS units

### Text

- `font-size` — text size
- `font-family` — font style
- `font-weight` — text thickness
- `text-align` — align text
- `text-decoration` — underline or remove underline
- `line-height` — spacing between lines

### Box Model

- `width` / `height` — element size
- `margin` — space outside the element
- `padding` — space inside the element
- `border` — element border
- `border-radius` — rounded corners
- `box-sizing: border-box` — include padding and border in size

### Flexbox

- `display: flex` — enable flex layout
- `flex-direction` — row or column
- `justify-content` — horizontal alignment
- `align-items` — vertical alignment
- `gap` — space between items
- `flex-wrap` — allow items to wrap

### Pseudo Classes

- `:hover` — mouse over
- `:focus` — selected input
- `:active` — clicked element
