// Simple React component example — not runnable on its own.
// You'll use this pattern once you set up a React project.

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add +1</button>
    </div>
  );
}

export default Counter;
