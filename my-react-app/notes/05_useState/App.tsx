import { useState } from "react";

/**
 * useState: A built-in React Hook that allows functional components to store,
 * track, and update local data (state) across re-renders. Calling the setter
 * function updates the value and triggers React to re-render the component.
 */

function App() {
  // Syntax: const [currentValue, setterFunction] = useState(initialValue);
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Current count: {count}</p>

      {/* Updating state triggers a component re-render with the new value */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
