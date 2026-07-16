import { useContext } from "react"
import ThemeContext from "../context/Context"

function ThemeMode() {
    const {theme , setTheme} = useContext(ThemeContext)
  return (
    <div>
        <button
        className="w-full h-screen"
        style={{backgroundColor: theme==='light' ? 'white' : 'black',
            color: theme==='light' ? 'black' : 'white'
        }}
        onClick={() => setTheme(theme==='light' ? 'dark':'light')}
        >
            Switch To {theme === 'light' ? 'dark' : 'light'}
        </button>
    </div>
  )
}

export default ThemeMode