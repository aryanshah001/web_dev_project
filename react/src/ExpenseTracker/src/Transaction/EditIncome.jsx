import { useState } from "react";
import { removeTransaction, updateTransaction } from "../store/TransSlice";
import { useDispatch } from "react-redux";

function EditIncome({ transaction,srNo}) {
  const dispatch = useDispatch();

  const [newMsg, setNewMsg] = useState(transaction.text);
  const [newAmt, setNewAmt] = useState(transaction.amount);

  const [isTransEditable, setIsTransEditable] = useState(false);

  const editTrans = () => {
    dispatch(
      updateTransaction({
        id:transaction.id,
        text: newMsg,
        amount: newAmt,
        type: "income",
      }),
    );
    setIsTransEditable(false);
  };

  return (
    <div className="flex justify-center">
  <div className="flex items-center mt-5 font-bold text-lg border border-black/10 bg-amber-50 w-fit">
        
        <span className="mr-3"> {srNo}. </span>
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
          className="border-2 border-black px-3 rounded"
          type="button"
          onClick={() => {
            if (isTransEditable) {
              editTrans();
            } else {
              setIsTransEditable((prev) => !prev);
            }
          }}
        >
          {isTransEditable ? "save" : "Edit"}
        </button>

        <button
          className="border-2 border-black px-2 rounded ml-5"
          onClick={() => dispatch(removeTransaction(transaction.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default EditIncome;
