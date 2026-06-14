import UserContextProvider from "./context/contProvider";
import Login from './components/login'
import Profile from "./components/profile";

function App() {
  return (
    <UserContextProvider>
      <h1>chai and code</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
