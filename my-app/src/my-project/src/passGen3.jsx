import { useCallback, useEffect, useRef, useState } from "react";

function Appdesign() {
  let [length, setLength] = useState(8);
  let [numAllowed, setNumAllowed] = useState(false);
  let [charAllowed, setCharAllowed] = useState(false);
  let [password, setPassword] = useState("");

  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGen();
  }, [length, numAllowed, charAllowed, passwordGen]);

  // useRef Hook
  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 51);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="h-screen bg-black text-white flex flex-col items-center">
        <div className="bg-gray-700 px-8 py-2 mt-2 w-4xl items-center  flex flex-col">
          <h1 className="text-3xl flex justify-center font-bold">
            Password Generator
          </h1>

          <div className="flex flex-row overflow-hidden ">
            <input
              className="  rounded-2xl outline-none px-4  py-3 mt-4 border-white border-2 w-96"
              type="text"
              placeholder="password"
              value={password}
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className="bg-yellow-700 mt-4 rounded-r-2xl text-3xl"
            >
              copy
            </button>
          </div>

          <div className="flex flex-row gap-x-2">
            <input
              type="range"
              id="range"
              min={6}
              max={50}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="range">length {length}</label>

            <input
              type="checkbox"
              checked={numAllowed}
              id="NumberAllowed"
              onChange={() => setNumAllowed((prev) => !prev)}
            />
            <label htmlFor="NumberAllowed">Number</label>

            <input
              type="checkbox"
              id="character"
              checked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="character">character</label>
          </div>
        </div>
      </div>
    </>
  );
}
export default Appdesign;
