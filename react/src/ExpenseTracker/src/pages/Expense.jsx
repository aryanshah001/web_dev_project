import AddTrans from "../Transaction/AddTrans"
import EditTrans from "../Transaction/EditTrans"
import { useSelector } from "react-redux"

function Expense() {
    const transaction = useSelector(state => state.transaction)

    const expense = transaction.filter((item) => item.type === 'expense')


  return (
    <div>
        <AddTrans />
        
       {
        expense.map((items) => (
            <div key={items.id}>
                <EditTrans transaction={items} />
            </div>
        ))
       }
    </div>
  )
}

export default Expense