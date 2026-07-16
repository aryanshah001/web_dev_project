import ThemeMode from "./components/ThemeMode"
import ThemeProvider from "./context/ThemeProvider"

function App() {
  return (
    <ThemeProvider>
      <ThemeMode />
    </ThemeProvider>
  )
}

export default App