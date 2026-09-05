import { useState,useRef } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../store/TransSlice";
import Search from './Search'
import EditIncome from "./EditIncome";
import Sort from '../filter/Sort'

function AddIncome() {
  const dispatch = useDispatch();
  const [source, setSource] = useState("");
  const [income, setIncome] = useState('');
  const [error, setError] = useState('');
  const sourceRef = useRef()


  const submit = (e) => {
    e.preventDefault();
    if(!source){
      setError('plz enter Income Source')
      return
    }
    if(!income){
      setError('plz enter Income Amount')
      return
    }
    dispatch(
      addTransaction({
        text: source,
        amount: income,
        type: "income",
      }),
    );
    setIncome("");
    setSource("");
    sourceRef.current.focus()
  };
  return (
    <div>
      <div className="border-2 border-black mt-5 py-2 mx-5 ">
        <div className="text-3xl font-bold flex justify-center">
          Add Income Source
        </div>
      </div>

      <form onSubmit={submit}>
        <div className="mt-8  flex justify-center gap-1 border-b-2 mx-5 pb-5 items-start">
          <label className="font-bold text-lg">Income Source :-</label>
          <input
            className="border-2 border-black rounded ml-2 px-3 w-78 "
            placeholder="Source"
            type="text"
            ref={sourceRef}
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />

          <label className="font-bold text-lg ml-10"> Amount :- </label>
          <input
            className="border-2 border-black rounded ml-2 px-3 w-24"
            placeholder="Amount"
            type="text"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
          />

          

          <button className="bg-green-500 text-white rounded ml-10 px-3 py-1 font-bold ">
            ADD
          </button>

          <div 
          className="ml-10"
          >
            <div className="ml-105">
              <Search 
          type='income' />
            </div>

          </div>
          
        </div>
        {
          error && <h1 className="font-bold text-red-600 text-2xl"> {error} </h1>
        }
      </form>
      
      <Sort Name={EditIncome} type='income' />
    </div>
  );
}

export default AddIncome;
