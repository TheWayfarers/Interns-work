function marks(marks1, marks2) {
    return marks1 + marks2;
}

const percentage = (marks) => (marks / 200) * 100;

function assignment(status = "Submitted") {
    return `Assignment Status: ${status}`;
}

let total = marks(76, 85);

console.log(`Total Marks: ${total}`);
console.log(`Percentage: ${percentage(total).toFixed(2)}%`);
console.log(assignment());
