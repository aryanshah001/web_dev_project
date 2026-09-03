import {useState } from "react"
import { useDispatch } from "react-redux"
import { addTransaction } from "../store/TransSlice"

function AddTrans() {
    const [msg, setMsg] = useState('')
    const [amt, setAmt] = useState('')
    const dispatch = useDispatch()


  return (
    <div className='mt-2'>
        <h2 className="text-2xl flex justify-center underline ">Enter Expenses</h2>

        <form
        onSubmit={(e) => {
            e.preventDefault()
            if(!msg || !amt) return
            dispatch(addTransaction({
                text:msg,
                amount:amt,
                type:'expense'
            }))
            setMsg("")
            setAmt("")
        }}
        >
            <label
            className="ml-4 text-2xl font-bold text-red-500"
            > Enter Expense Title :- </label>

            <input 
            className="border-2 border-black mt-4 px-3 py-1 rounded"
            type="text" 
            placeholder="enter expense title"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            />
           
            <label 
            className="ml-4"
            > Amount :- </label>

            <input 
            type="text" 
            className="border-2 border-black w-25 px-3 py-1 rounded"
            placeholder="enter amt  "
            value={amt}
            onChange={(e) => setAmt(Number(e.target.value))}
            />

            <button
            type="submit"
            className="border-2 border-black ml-6 px-3 py-1 bg-red-500 text-white rounded-lg"
            >
                ADD
            </button>

        </form>
         
    </div>
  )
}

export default AddTrans