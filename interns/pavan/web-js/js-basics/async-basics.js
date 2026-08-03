// Run with: node async-basics.js

// setTimeout — run code after a delay
console.log("Start");

setTimeout(() => {
  console.log("This runs after 1 second");
}, 1000);

// Promise — future value (success or failure)
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded!"), 500);
  });
};

// async/await — cleaner way to wait for promises
async function main() {
  console.log("Loading...");
  const result = await fetchData();
  console.log(result);
}

main();

console.log("End (runs before async finishes)");