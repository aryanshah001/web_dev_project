import { useEffect, useState } from "react"
import { ThemeProvider } from "./context/ThemeContext"
import ThemeBtn from "./components/ThemeBtn"
import Card from "./components/Card"

function App() {
  const[themeMode ,setThemeMode] = useState('light')

  useEffect(() => {
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(themeMode)
  } ,[themeMode])
  
  return (
    <ThemeProvider value={{themeMode, setThemeMode}}>
      <ThemeBtn /> 
      <Card /> 
    </ThemeProvider>
  )
}

export default App