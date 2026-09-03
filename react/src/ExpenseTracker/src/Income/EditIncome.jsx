import { useState } from "react"
import {removeTransaction ,updateTransaction} from '../store/TransSlice'
import { useDispatch } from "react-redux"


function EditIncome({income}) {
    const dispatch = useDispatch()

    const [newMsg, setNewMsg] = useState(income.text)
    const [newAmt, setNewAmt] = useState(income.amount)

    const [isTransEditable, setIsTransEditable] = useState(false)

    const editTrans = () => {
        dispatch(updateTransaction({
            id:income.id,
            text:newMsg,
            amount:newAmt,
            type:'income'
        }))
        setIsTransEditable(false)
    }

  return (
    <div>

    <input
    type="text"    
    className=""
    value={newMsg}
    onChange={(e) => setNewMsg(e.target.value)}
    readOnly={!isTransEditable}
    />

    <input
    type="text"    
    className=""
    value={newAmt}
    onChange={(e) => setNewAmt(Number(e.target.value))}
    readOnly={!isTransEditable}
    />
    

    <button
    className="border-2 border-black px-2 rounded-lg" 
    type="button"
    onClick={() => {
        if(isTransEditable){
            editTrans()
        }else{
            setIsTransEditable(prev => !prev)
        }
    }
        
    }
    >
        {isTransEditable? 'save' : 'Edit'}
    </button>

    <button
    className="border-2 border-black px-2 rounded-lg" 
    onClick={() => dispatch(removeTransaction(income.id))}
    >
        x
    </button>

    </div>
  )
}

export default EditIncome