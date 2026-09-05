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

     <div className="border-2 border-black mt-5 py-2 mx-5"> 
      <div className="text-3xl font-bold flex justify-center">Dashboard</div></div>

     
       <div className="flex justify-between mx-5">

  <div className="border-2 px-5 py-5 mt-10 w-80 h-80 flex flex-col justify-center items-center font-bold text-3xl rounded-3xl">
    <h1>Total Income</h1>
    <p>Rs {totalIncome}</p>
  </div>

  <span className="flex flex-col justify-center items-center font-bold text-5xl">-</span>

  <div className="border-2 px-5 py-5 mt-10 w-80 h-80 flex flex-col justify-center items-center font-bold text-3xl rounded-3xl">
    <h1>Total Expenses</h1>
    <p>Rs {totalExpense}</p>
  </div>

  <span className="flex flex-col justify-center items-center font-bold text-3xl">=</span>

  <div className="border-2 px-5 py-5 mt-10 w-80 h-80 flex flex-col justify-center items-center font-bold text-3xl rounded-3xl">
    <h1>Saving</h1>
    <p>Rs {totalSaving}</p>
  </div>

</div>



      
      </div>


    
  )
}

export default Home