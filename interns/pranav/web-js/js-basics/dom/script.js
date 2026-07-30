const output = document.getElementById("output");
const changeButton = document.getElementById("changeButton");
const resetButton = document.getElementById("resetButton");

changeButton.addEventListener("click", () => {
    output.textContent = "Hello! JavaScript changed this text.";
});

resetButton.addEventListener("click", () => {
    output.textContent = "Click a button to change this text.";
});
