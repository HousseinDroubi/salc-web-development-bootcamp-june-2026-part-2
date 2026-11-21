import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => s + 1);
      console.log(
        "If you remove the cleanup function below, this log will still appear in every second even when the component unmount",
      );
    }, 1000);

    // Cleanup function runs on unmount (or before effect re-runs if you are listening to a state changing)
    return () => clearInterval(id);
  }, []);

  return <p>Elapsed: {seconds}s</p>;
}

export default Timer;
