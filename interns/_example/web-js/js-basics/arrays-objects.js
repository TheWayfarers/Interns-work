// Run with: node arrays-objects.js

const skills = ["HTML", "CSS", "JavaScript", "React"];

// Loop
for (const skill of skills) {
  console.log("-", skill);
}

// map — transform each item
const upper = skills.map((s) => s.toUpperCase());
console.log("Uppercase:", upper);

// filter — keep items that match a condition
const longNames = skills.filter((s) => s.length > 3);
console.log("Long names:", longNames);

// find — get first match
const found = skills.find((s) => s.startsWith("R"));
console.log("Starts with R:", found);

// Object
const intern = {
  name: "Varshitha",
  track: "web-js",
  completed: ["git-setup", "daily-log"],
};

console.log(intern.name);
console.log("Completed tasks:", intern.completed.join(", "));

// Destructuring
const { name, track } = intern;
console.log(`${name} — track: ${track}`);
