import { useSelector } from "react-redux"
import AddTrans from "./Transaction/AddTrans"
import EditTrans from "./Transaction/EditTrans"



function App() {
  const transaction = useSelector(state => state.transaction)

  return (
    <>
      <AddTrans />

      {
        transaction.map((item) => (
          <div key={item.id}>
            <EditTrans transaction={item} />
          </div>
        ))
      }

    </>
  )
}

export default App