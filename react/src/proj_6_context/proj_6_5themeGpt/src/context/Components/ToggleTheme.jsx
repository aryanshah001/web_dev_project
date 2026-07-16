import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

function ToggleTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className="h-screen"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white"
      }}
    >
      <button
      onClick={toggleTheme}
      >switch to {theme === "light" ? "dark" : "light"}</button>
    </div>
  );
}

export default ToggleTheme;
