import { useState } from "react";

function BgColorSir() {
  let [color, setColor] = useState("green");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-wrap justify-center fixed bottom-12 inset-x-0">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button
              onClick={() => setColor("red")}
              className="px-2 rounded-2xl  bg-red-600"
            >
              red
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="px-2 rounded-2xl  bg-black-600"
            >
              yellow
            </button>
            <button
              onClick={() => setColor("blue")}
              className="px-2 rounded-2xl  bg-blue-600"
            >
              blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default BgColorSir;
