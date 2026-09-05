import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../store/TransSlice";
import Search from "./Search";
import Sort from "../filter/Sort";
import EditTrans from './EditTrans'

function AddTrans() {
  const [msg, setMsg] = useState("");
  const [amt, setAmt] = useState("");
  const [error, setError] = useState("");
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  return (
    <div>
      <div className="border-2 border-black mt-5 py-2 mx-5 ">
        <div className="text-3xl font-bold flex justify-center">
          Add Expenses
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!msg ) {
            setError('plz enter expense title')
            return
          }

          else if (!amt ){
            setError('plz enter Amount')
            return
          }

          else if(!category){
            setError('plz select Category field')
            return
          }

          dispatch(
            addTransaction({
              text: msg,
              amount: amt,
              type: "expense",
            }),
          );
          setMsg("");
          setAmt("");
          setCategory('')
          setError('')
        }}
      >
        <div className="mt-8  flex justify-center gap-1 border-b-2 mx-5 pb-5">
          <label className="font-bold text-lg"> Enter Expense Title :- </label>

          <input
            className="border-2 border-black rounded ml-2 px-3 w-78 capitalize"
            type="text"
            placeholder="enter expense title"
            value={msg}
            onChange={(e) => setMsg(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
          />

          <label className="font-bold text-lg ml-10"> Amount :- </label>

          <input
            type="text"
            className="border-2 border-black rounded ml-2 px-3 w-24"
            placeholder="enter amt  "
            value={amt}
            onChange={(e) => setAmt(Number(e.target.value))}
          />

          <div className="ml-5">
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value=""disabled>Category</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="other">Other</option>
          </select>
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white rounded ml-10 px-3 py-1 font-bold "
          >
            ADD
          </button>
          <div className="ml-80">
            <Search type="expense" />
          </div>
        </div>
        {error && <h1 className="font-bold text-red-600 text-2xl"> {error} </h1>}
      </form>

      <div className="">
        <Sort Name={EditTrans} type="expense" />
      </div>
    </div>
  );
}

export default AddTrans;
