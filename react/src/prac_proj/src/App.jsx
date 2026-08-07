import LoginProvider from "./context/LoginProvider"
import Profile from "./components/Profile"
import Login from "./components/Login"

function App() {
  return (
    <LoginProvider>
      <Profile />
      <Login/>
    </LoginProvider>
  )
}

export default App