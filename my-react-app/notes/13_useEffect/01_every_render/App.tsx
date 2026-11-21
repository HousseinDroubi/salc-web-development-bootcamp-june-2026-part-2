import { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  // The following useEffect will render on mount and on every single render (no dependency array)
  useEffect(() => {
    console.log(
      `This useEffect will run on every render - counter = ${counter}`,
    );
  });
  return (
    <>
      <p>Counter: {counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment Counter
      </button>
    </>
  );
};

export default App;
