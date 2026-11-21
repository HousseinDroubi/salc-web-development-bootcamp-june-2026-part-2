import { useState } from "react";
import Timer from "./components/Timer";

const App = () => {
  const [visibile, setVisibility] = useState<boolean>(true);

  return (
    <>
      {visibile && <Timer />}
      <button
        onClick={() => {
          setVisibility(!visibile);
        }}
      >
        Toggle
      </button>
    </>
  );
};

export default App;
