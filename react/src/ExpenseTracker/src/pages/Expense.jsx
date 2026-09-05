import AddTrans from "../Transaction/AddTrans";
// import EditTrans from "../Transaction/EditTrans";
// import { useSelector } from "react-redux";


function Expense() {
  // const expenses = useSelector((state) => state.transaction);
  // const transaction = expenses.filter((items) => items.type === "expense");

  return (
    <div>
      <AddTrans />

      

      {/* {transaction.map((items, index) => (
        <div key={items.id}>
          <EditTrans transaction={items} srNo={index + 1} />
        </div>
      ))} */}
    </div>
  );
}

export default Expense;
