import { useState } from "react";

function BgColor() {
    let [color , setColor] = useState('purple')

  return (
    <>
        <div 
        // className="w-full h-screen duration-150"
        className="h-screen"
        style = {{backgroundColor : color}}>
        </div>

        <div className="flex flex-wrap fixed justify-center bottom-12 inset-x-0  px-2">

            <div className=" px-2 rounded-2xl flex shadow-2xl gap-2">
                <button
                onClick={() => setColor('red')}
                className=" rounded-lg px-2 text-white  bg-red-500 "
                >
                    red
                    </button>
                <button 
                onClick={() => setColor('blue')}
                className=" rounded-lg px-2 text-white  bg-blue-500 "
                style={{background:'blue'}}>
                    blue
                    </button>
                <button 
                onClick={() => setColor('green')}
                className=" rounded-lg px-2 text-white  bg-green-500 "
                style={{background:'green'}}>
                    green
                    </button>
                
                </div>
        </div>
    </>
  )
}
export default BgColor;
