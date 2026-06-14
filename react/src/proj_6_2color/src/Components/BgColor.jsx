import { useContext } from "react"
import ColorContext from "../Context/ColorContext"

function BgColor() {

    const {color , setColor} = useContext(ColorContext)

  return (
    <div
    className=" h-screen "
    style={{backgroundColor:color}}
    >
        <button
        onClick={() => setColor('red')}
        >
            red
        </button>
        <button
        onClick={() => setColor('blue')}
        >
            blue
        </button>
    </div>
  )
}

export default BgColor