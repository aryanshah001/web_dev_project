import AddIncome from "../Income/AddIncome"
import EditIncome from "../Income/EditIncome"
import { useSelector } from "react-redux"

function Income() {
    const transaction = useSelector(state => state.transaction)

    const income = transaction.filter(item => item.type==='income')
  return (
    <div>
        <AddIncome />
        
       {
        income.map((items) => (
            <div key={items.id}>
                <EditIncome income={items} />
            </div>
        ))
       }
    </div>
  )
}

export default Income