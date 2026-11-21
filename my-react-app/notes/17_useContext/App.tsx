import { createContext, useContext, useState } from "react";
import Toolbar from "./components/Toolbar";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// 1. Create the context
export const ThemeContext = createContext<ThemeContextType | null>(null);

// 2. Provide the value at a higher level
export default function App() {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          background: theme === "dark" ? "#1e1e1e" : "#ffffff",
          color: theme === "dark" ? "#f5f5f5" : "#111111",
          minHeight: "100vh",
          padding: "16px",
        }}
      >
        <Toolbar />
      </div>
    </ThemeContext.Provider>
  );
}
