import { useContext } from "react";
import { ThemeContext } from "../App";

// 3. Consume context directly in a deeply nested child
function ThemeButton() {
  const ctx = useContext(ThemeContext);
  if (!ctx)
    throw new Error("ThemeButton must be used inside ThemeContext.Provider");

  return (
    <button type="button" onClick={ctx.toggleTheme}>
      Switch to {ctx.theme === "light" ? "dark" : "light"} mode
    </button>
  );
}

export default ThemeButton;
