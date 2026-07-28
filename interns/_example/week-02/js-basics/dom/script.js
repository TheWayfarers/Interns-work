// Open dom/index.html in your browser to try this.

const output = document.getElementById("output");
const btnHello = document.getElementById("btn-hello");
const btnReset = document.getElementById("btn-reset");

const messages = ["Hello!", "Learning JS!", "DOM is working!"];
let index = 0;

btnHello.addEventListener("click", () => {
  output.textContent = messages[index];
  index = (index + 1) % messages.length;
});

btnReset.addEventListener("click", () => {
  output.textContent = "Waiting for click...";
  index = 0;
});
