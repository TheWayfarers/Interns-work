// Mock API — simulates fetching posts with a network delay.
// Used in Task 04 — Posts Feed.

const MOCK_POSTS = [
  {
    id: 1,
    userId: 1,
    title: "Getting started with fetch",
    body: "Learn how to load data asynchronously and render it in the DOM.",
  },
  {
    id: 2,
    userId: 1,
    title: "Understanding Promises",
    body: "A Promise represents a value that may be available now, later, or never.",
  },
  {
    id: 3,
    userId: 2,
    title: "Async and await in practice",
    body: "Async functions make Promise-based code easier to read and write.",
  },
  {
    id: 4,
    userId: 2,
    title: "Loading and error states",
    body: "Always show users when data is loading or when something went wrong.",
  },
  {
    id: 5,
    userId: 3,
    title: "Rendering lists from API data",
    body: "Use map to transform an array of objects into HTML cards.",
  },
  {
    id: 6,
    userId: 3,
    title: "Search and filter client-side",
    body: "Filter fetched data in JavaScript without another API call.",
  },
];

const MOCK_DELAY_MS = 1500;

function fetchPostsMock() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_POSTS), MOCK_DELAY_MS);
  });
}

function fetchPostsMockFail() {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Mock API failed")), MOCK_DELAY_MS);
  });
}
