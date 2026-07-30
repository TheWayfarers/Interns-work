// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function
const multiply = (a, b) => a * b;

// Function with a default parameter
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(`Addition: ${add(10, 5)}`);
console.log(`Multiplication: ${multiply(4, 3)}`);
console.log(greet("Pranav"));
console.log(greet());
