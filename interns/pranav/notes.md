# Learning Notes

## Async JavaScript

### What is a Promise?

A Promise represents a result that may become available later. It can either complete successfully or fail, which helps us handle asynchronous operations in JavaScript.

### Why does "End" print before "Data loaded"?

"End" prints first because JavaScript continues running the synchronous code while the asynchronous operation is still waiting. Once that operation finishes, "Data loaded" is printed.
