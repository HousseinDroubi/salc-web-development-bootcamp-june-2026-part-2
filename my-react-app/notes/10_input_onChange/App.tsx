import { useState } from "react";

const App = () => {
  const [text, setText] = useState<string>("");
  return (
    <>
      <p>Text you entered: {text}</p>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </>
  );
};

export default App;
