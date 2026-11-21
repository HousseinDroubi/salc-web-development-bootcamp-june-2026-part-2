import { useState } from "react";
import CelsiusInput from "./components/CelsiusInput";
import FahrenheitDisplay from "./components/FahrenheitDispaly";

// 1. Common parent owns the shared state
function App() {
  const [celsius, setCelsius] = useState("0");

  const fahrenheit =
    celsius === "" ? "" : ((Number(celsius) * 9) / 5 + 32).toFixed(1);

  return (
    <div>
      <CelsiusInput value={celsius} setValue={setCelsius} />
      <FahrenheitDisplay value={fahrenheit} />
    </div>
  );
}

export default App;
