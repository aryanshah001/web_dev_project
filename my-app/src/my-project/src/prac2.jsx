import { useCallback, useState } from "react";

function Data() {
  let [length, setLength] = useState(8);
  let [numAllowed, setnumAllowed] = useState(false);
  let [charAllowed, setcharAllowed] = useState(false);
  let [password, setPassword] = useState("");
  const password = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numAllowed)   str += '0123456789'
    if (charAllowed) str += '!@#$%^&()'

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1 )
      pass = str.charAt(char)
      
    }
    setPassword(pass)

  }, [
    length,
    numAllowed,
    charAllowed,
    setPassword,
  ]);
  return (
    <>
      <h1 className="text-4xl text-center bg-green-500">Password Generator</h1>
    </>
  );
}

export default Data;
