import { useState } from "react";

function ToggleTheme() {
  let [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div className="h-screen"
      style={{backgroundColor:theme==='light'?'white':'black'}}
      >
        <label className="cursor-pointer inline-flex">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
          className="sr-only"
        />

        <div className="w-14 h-8 bg-gray-300 rounded-full">

            <div className={`w-8 h-8 bg-gray-600 rounded-full ${theme==='dark'? 'translate-x-6':'' } `}></div>
        </div>
      </label>
      </div>
    </>
  );
}

export default ToggleTheme;
