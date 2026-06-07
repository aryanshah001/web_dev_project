import { useContext, useState } from "react";
import UserContext from "../context/context";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleClick = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <>
      <form>
        <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleClick}>submit</button>
      </form>
    </>
  );
}

export default Login;
