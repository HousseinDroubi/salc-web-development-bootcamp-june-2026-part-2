import { useRef } from "react";

function App() {
  const text = useRef<string>("");
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          text.current = e.target.value;
        }}
      />
      <br />
      <button
        onClick={() => {
          console.log(text.current);
        }}
      >
        Show text in console
      </button>
    </>
  );
}

export default App;
