import User from './comonents/user'
import UsercontextProvider from './context/UserContextProv'

function App() {
  return (
    <UsercontextProvider>
      <User/>
    </UsercontextProvider>
  )
}

export default App