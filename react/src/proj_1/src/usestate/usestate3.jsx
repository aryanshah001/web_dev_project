import { useState } from "react"
function Usestate3() {
    let [counter, setCounter] = useState(8)

    const add = () => {     //This will update value by 3
        setCounter(prevCounter => prevCounter+1)
        setCounter(prevCounter => prevCounter+1)
        setCounter(prevCounter => prevCounter+1)
    }
  return (
    <div>
        <button  onClick={add} >ADD = {counter} </button>
    </div>
  )
}

export default Usestate3