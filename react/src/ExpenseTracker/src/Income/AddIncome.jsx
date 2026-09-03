import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTransaction } from "../store/TransSlice"

function AddIncome() {

  const dispatch = useDispatch()
  const [source ,setSource]  = useState('')
  const [income, setIncome] = useState()

  const submit = (e) => {
            e.preventDefault()
            dispatch(addTransaction({
              text:source,
              amount:income,
              type:'income'
            }))
            setIncome('')
            setSource('')
  }
  return (
    <div>
        <h1 className="flex justify-center font-bold text-green-600 text-2xl">Add Income Source</h1>

        <form onSubmit={submit}>
          <label className="font-bold">Income Source:-</label>
        <input
        className="border-2 border-black rounded-xl ml-2" 
        type="text"
        value={source}
        onChange={(e) => setSource(e.target.value)}
        />

        <label className="font-bold"> Amount </label>
        <input 
        className="border-2 border-black rounded-xl ml-2"
        type="text"
        value={income}
        onChange={(e) => setIncome(Number(e.target.value))}
        />

        <button
        className="bg-green-500 text-white rounded-lg ml-4 px-2 py-1"
        >ADD</button>
        </form>



    </div>
  )
}

export default AddIncome