// Run with: node basics.js

// Variables
const firstName = "Varshitha";
const lastName = "Parupally";
let marks = 70;
marks = marks + 12;

// Data types
const isPassed = true;
const topics = ["Java", "Python", "Web Development", "SQL", "C++"];
const student = { name: firstName, branch: "Computer Science(Data Science)" };

// Operators
const total = marks;
const greeting = "Welcome, " + firstName + " " + lastName;

// Template literals
const message = `Hi ${firstName}! Your marks are ${marks}.`;

console.log(greeting);
console.log(message);
console.log("Topics:", topics.join(", "));
console.log("Student:", student.name, "-", student.branch);
console.log("Is Passed:", isPassed);
console.log("Total Marks:", total);
