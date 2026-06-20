import useTheme from "../context/ThemeContext"

function ThemeBtn() {
    const{themeMode , setThemeMode} = useTheme()

    const toggleBtn = () => setThemeMode((prev) => prev==='light'?'dark':'light')
  return (
    <div>
        <label>
            <input type="checkbox" 
        className="sr-only"
        checked={themeMode === 'dark'}
        onChange={toggleBtn}
        />

        <div className="w-14 h-8 bg-gray-500 rounded-full ">
            <div className={`w-8 h-8 bg-gray-300 rounded-full transition-transform duration-200 ${themeMode==='dark'?'translate-x-6':''}`}></div>

        </div>
        </label>
    </div>
  )
}

export default ThemeBtn