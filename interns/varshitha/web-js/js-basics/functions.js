// Run with: node functions.js

// Regular function
function marks(marks1, marks2) {
    return marks1 + marks2;
}

// Arrow function
const percentage = (marks) => (marks / 200) * 100;

// Function with default parameter
function assignment(status = "Submitted") {
    return `Assignment Status: ${status}`;
}

// Callback function
function updateMarks(callback, marks) {
    return callback(marks);
}

// Callback
function addBonus(marks) {
    return marks + 10;
}

let total =marks(76, 85);
let updatedMarks = updateMarks(addBonus, total);

console.log(`Total Marks: ${total}`);
console.log(`Percentage: ${percentage(total).toFixed(2)}%`);
console.log(assignment());
console.log(`Updated Marks: ${updatedMarks}`);
console.log(`Updated Percentage: ${percentage(updatedMarks).toFixed(2)}%`);