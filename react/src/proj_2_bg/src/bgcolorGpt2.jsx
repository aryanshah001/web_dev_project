import { useState } from "react";

function BgColor() {
  const [color, setColor] = useState("purple");

  const colors = ["red", "blue", "green", "yellow"];

  return (
    <div
      className="h-screen flex justify-center items-end"
      style={{ backgroundColor: color }}
    >
      <div className="flex gap-3 mb-12 bg-white px-4 py-2 rounded-2xl shadow-lg">
        
        {colors.map((clr) => (
          <button
            key={clr}
            onClick={() => setColor(clr)}
            className="px-3 py-1 text-white rounded capitalize"
            style={{ backgroundColor: clr }}
          >
            {clr}
          </button>
        ))}

      </div>
    </div>
  );
}

export default BgColor;