console.log("Start");

setTimeout(() => {
  console.log("This runs after 1 second");
}, 1000);

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded!"), 500);
  });
};

async function main() {
  console.log("Loading...");
  const result = await fetchData();
  console.log(result);
}

main();

console.log("End (runs before async finishes)");
