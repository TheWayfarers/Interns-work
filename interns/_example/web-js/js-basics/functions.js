// Run with: node functions.js

// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const multiply = (a, b) => a * b;

// Function with default value
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

// Callback — a function passed to another function
function applyTwice(fn, value) {
  return fn(fn(value));
}

const double = (n) => n * 2;

console.log(add(3, 7));              // 10
console.log(multiply(4, 5));         // 20
console.log(greet("Pavan"));         // Hello, Pavan!
console.log(applyTwice(double, 3));  // 12
