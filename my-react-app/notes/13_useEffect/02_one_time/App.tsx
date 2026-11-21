import { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  // The following useEffect will run only one time which is on component mount (empty dependency array)
  useEffect(() => {
    console.log(
      `This use Effect will run only on mount - counter = ${counter}`,
    );
  }, []);
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
