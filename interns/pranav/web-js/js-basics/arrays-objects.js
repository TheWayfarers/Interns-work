const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

// Transform every item
const skillMessages = skills.map(skill => `Learning ${skill}`);

// Keep only selected items
const webSkills = skills.filter(skill =>
    skill === "HTML" || skill === "CSS" || skill === "JavaScript"
);

const intern = {
    name: "Pranav Manda",
    role: "Software Developer Intern",
    learning: "JavaScript"
};

// Object destructuring
const { name, role } = intern;

console.log("Skills:", skills);
console.log("Mapped:", skillMessages);
console.log("Filtered:", webSkills);
console.log(`${name} is a ${role}.`);
