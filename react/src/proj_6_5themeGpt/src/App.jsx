import ToggleTheme from "./context/Components/ToggleTheme"
import ThemeProvider from "./context/Context/ThemeProvider"

function App() {
  return (
    <ThemeProvider>
      <ToggleTheme /> 
    </ThemeProvider>
  )
}

export default App