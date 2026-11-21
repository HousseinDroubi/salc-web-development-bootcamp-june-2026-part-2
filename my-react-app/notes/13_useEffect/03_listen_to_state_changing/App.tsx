import { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  // The following useEffect will run on component mount and on every single time the counter changes (dependency array has counter only)
  useEffect(() => {
    console.log(
      `This use Effect will run only on mount and when counter changes - counter = ${counter}`,
    );
  }, [counter]);
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
