import { useState } from "react";
function State() {
  let [counter, setCounter] = useState(15);
  let [msg , setMsg] = useState('')

  const add = () => {
    if (counter >= 20) {
      setMsg("value cant be exceeded more than 20");
      return;
    }
    setCounter(counter + 1);
    setMsg("")
  };
  const sub = () => {
    if (counter <= 10) {
      setMsg("value cant be belowed less than 10");
      return;
    }
    setCounter(counter - 1);
    setMsg("")
  };

  return (
    <>
      <h1>Hello User</h1>
      <h2>Increase and Decrease the value</h2>
      <h3>counter = {counter} </h3>
      
      <button onClick={add}>add</button> <br />
      <button onClick={sub}>sub</button>

      <p>{msg}</p>
    </>
  );
}
export default State;
