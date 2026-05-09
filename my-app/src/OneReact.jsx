import { useState } from "react";

function Simple(){
    // let counter = 10;
    let [counter , setCounter] = useState(10)

    const add = () => {
         
        if (counter >= 10) return;    
        setCounter(counter + 1)
    }
    
    const sub = () => {
        if (counter <= 0) return;    
        setCounter(counter - 1)
    }
    return(
        <>
            <h1>Increment and Decrement</h1>
            <h2>Counter : {counter}</h2>
            <button onClick={add}>Add {counter}</button>
            <button onClick={sub}>Subtract</button>
            <p>footer: {counter}</p>
        </>
    )
}
export default Simple