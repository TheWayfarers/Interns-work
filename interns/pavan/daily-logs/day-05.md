# Daily Log — 2026-08-01

## What I learned today

- Learned how JavaScript interacts with HTML using the DOM (Document Object Model).
- Understood how to connect an HTML page with a JavaScript file using the <script src="script.js"></script> tag.
- Learned how to select HTML elements using `document.getElementById()`.
- Learned how to attach event listeners to elements using `addEventListener()`.
- Learned how to handle button click events.
- Learned how to update page content dynamically using the `textContent` property.
- Understood the difference between `textContent` and `innerHTML`.
-----------------------------------------------------------------------------------------
- Learned the basics of asynchronous JavaScript.
- Understood how `setTimeout()` schedules code to run after a specified delay without blocking the execution of the remaining code.
- Learned that creating a function or an async function does not execute it; it only executes when the function is called.
- Understood how a Promise represents a future value and is resolved asynchronously.
- Learned that `await` pauses only the current `async` function, not the entire JavaScript program.
- Understood the execution flow of asynchronous code:
  1. `Start` is printed.
  2. A 1-second timer is scheduled using `setTimeout()`.
  3. `main()` is called and prints `Loading...`.
  4. `fetchData()` returns a Promise and starts a 500 ms timer.
  5. `await` pauses only the `main()` function.
  6. The remaining synchronous code executes, printing `End (runs before async finishes)`.
  7. After 500 ms, the Promise resolves and `Data loaded!` is printed.
  8. After 1 second, the first `setTimeout()` callback executes and prints `This runs after 1 second`.

## What I practiced / built

- Created the `web-js/js-basics/dom` folder.
- Built `index.html` with:
  - A heading
  - Two buttons (Change Text and Reset)
  - A paragraph with `id="output"`
- Created `script.js` and connected it to `index.html`.
- Selected HTML elements using `document.getElementById()`.
- Added click event handlers using `addEventListener()`.
- Implemented functionality:
  - **Change Text** button updates the paragraph text.
  - **Reset** button restores the original text.
- Verified that the application works correctly in the browser.
---------------------------------------------------------------------
- Practiced using `setTimeout()` to execute code after a delay.
- Practiced creating and returning a Promise.
- Practiced using `async` and `await` to handle asynchronous operations.
- Traced the execution order of synchronous and asynchronous JavaScript code and understood why the output appears in that sequence.

## Blockers / questions

-

## Tomorrow's plan

- 
