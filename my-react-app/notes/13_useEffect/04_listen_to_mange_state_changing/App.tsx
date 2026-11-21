import { useEffect, useState } from "react";

const App = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // The following useEffect will run on component mount and on every single time the counter1 or counter2 change (dependency array has counter1 and counter 2)
  useEffect(() => {
    console.log(
      `This use Effect will run only on mount and when counter1 or counter 2 changes - counter1 = ${counter1}, counter2 = ${counter2}`,
    );
  }, [counter1, counter2]);
  return (
    <>
      <p>Counter1: {counter1}</p>
      <p>Counter2: {counter2}</p>
      <button
        onClick={() => {
          setCounter1(counter1 + 1);
        }}
      >
        Increment Counter1
      </button>
      <br />
      <button
        onClick={() => {
          setCounter2(counter2 + 1);
        }}
      >
        Increment Counter2
      </button>
    </>
  );
};

export default App;
