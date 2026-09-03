import { useSelector } from "react-redux"

function Home() {

    const transaction = useSelector(state => state.transaction)   


  const totalIncome = transaction
    .filter(item => item.type === "income")
    .reduce((total, item) => total + Number(item.amount), 0)

  const totalExpense = transaction
    .filter(item => item.type === "expense")
    .reduce((total, item) => total + Number(item.amount), 0)

    const totalSaving = totalIncome - totalExpense

  return (
    <div>
      <h1>Total Income</h1>
      <p>₹{totalIncome}</p> <br /> <br />


      <h1>Total Expenses</h1>
      <p>₹{totalExpense}</p> <br /><br />


      <h1>Saving </h1>
      <p>₹{totalSaving}</p>


    </div>
  )
}

export default Home