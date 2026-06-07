import { useContext, useState } from "react";
import UserContext from "../context/userContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <form>
        <input
        className="border-black border-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
        />
            {'     '}
        <input
        className="border-black border-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="pass"
        />

        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );
}

export default Login;
