import { useState, useRef } from "react";

function AutoBgChange() {
  const [color, setColor] = useState("purple");

  const intervalRef = useRef(null);

  const colors = ["red", "blue", "green", "yellow", "orange", "pink"];

  function startChanging() {

    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {

      const randomIndex = Math.floor(Math.random() * colors.length);

      setColor(colors[randomIndex]);

    }, 1000);
  }

  function stopChanging() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  return (
    <div
      className="h-screen flex justify-center items-end"
      style={{ backgroundColor: color }}
    >
      <div className="flex gap-4 mb-12 bg-white px-6 py-4 rounded-2xl shadow-lg">

        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={startChanging}
        >
          Start
        </button>

        <button
          className="bg-red-600 text-white px-4 py-2 rounded"
          onClick={stopChanging}
        >
          Stop
        </button>

      </div>
    </div>
  );
}

export default AutoBgChange;