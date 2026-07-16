import BgColor from "./Components/BgColor"
import ColorProvider from "./Context/ColorProvider"

function App() {
  return (
    <ColorProvider>
    <BgColor/>
    </ColorProvider>
  )
}

export default App