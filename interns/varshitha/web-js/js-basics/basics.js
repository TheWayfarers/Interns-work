const firstName = "Varshitha";
const lastName = "Parupally";
let score = 70;
score = score + 12;

const isPassed = true;
const topics = ["Java", "Python", "Web Development", "SQL", "C++"];
const student = { name: firstName, branch: "Computer Science(Data Science)" };

const greeting = {
    name: firstName,
    role: "Web Developer Intern",
};

console.log(greeting.name + " is a " + greeting.role + ".");
console.log("Topics:", topics.join(", "));
console.log("Student:", student.name, "-", student.branch);
console.log("Is Passed:", isPassed);
console.log("Total Score:", score);
