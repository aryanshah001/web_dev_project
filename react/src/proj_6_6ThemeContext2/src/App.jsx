import { useState } from "react";
import { ThemeProvider } from "./Context/ThemeContext";

function App() {

  const [themeMode , setThemeMode] = useState('light')

  const lightMode = () => {
    setThemeMode('light')
  }
  const darkMode = () => {
    setThemeMode('dark')
  }

  return (
    <ThemeProvider value={{ThemeMode , darkMode , lightMode}} >
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          {/* {themebtn} */}
        </div>

        <div className="w-full max-w-sm mx-auto"></div>
        {/* {card} */}
      </div>
    </div>
    </ThemeProvider value={{ThemeMode , darkMode , lightMode}} >
  );
}

export default App;
