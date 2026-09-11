import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function ThemeToggleButton() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeToggleButton must be used inside ThemeProvider");
  }

  const { theme, toggleTheme } = context;

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}

export default ThemeToggleButton;
