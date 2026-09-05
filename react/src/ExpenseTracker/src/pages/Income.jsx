import AddIncome from "../Transaction/AddIncome"
// import EditIncome from "../Transaction/EditIncome"
// import { useSelector } from "react-redux"

function Income() {
    // const transaction = useSelector(state => state.transaction)
    // const income = transaction.filter(items => items.type === 'income')

  return (
    <div>
        <AddIncome />
        
       {/* {
        income.map((items,index) => (
            <div key={items.id}>
                <EditIncome 
                income={items} 
                srNo={index+1}
                />
            </div>
        ))
       } */}
    </div>
  )
}

export default Income