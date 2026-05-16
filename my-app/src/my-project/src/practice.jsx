import { useState } from "react";

function Bgcolor2 (){
    let [color , setColor] = useState('orange')
    let colors = ["red", "yellow" , "blue" ]
    return(
        <>
        <div 
        className=" h-screen"
        style={{background:color}}>

        <div
        className="flex justify-center gap-2">
            {colors.map((item) => (
                <button 
                key={item}
                onClick={() => setColor(item)}
                className="rounded-2xl"
                style={{background:item}}>
                    {item}
                </button>
            ))}
        </div>
        </div>
        </>
    )
}
export default Bgcolor2