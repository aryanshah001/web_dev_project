import { useState } from "react";
import { useSelector } from "react-redux";

function Sort({ Name, type }) {
  const [sortBy, setSortBy] = useState("");
  // const [category, setCategory] = useState("");

  const Transaction = useSelector((state) => state.transaction);
  const transaction = Transaction.filter((items) => items.type === type);

  

  //Sort by Category.
  // const filter = transaction.filter((items) => category==="" || items.category === category)

  // Sort By Ascending/Descending.
  const sortedTransaction = sortBy
    ? [...transaction].sort((a, b) => {
        if (sortBy === "az") return a.text.localeCompare(b.text);
        else if (sortBy === "za") return b.text.localeCompare(a.text);
        else if (sortBy === "newToOld")
          return new Date(b.date) - new Date(a.date);
        else if (sortBy === "oldToNew")
          return new Date(a.date) - new Date(b.date);
        else {
          return;
        }
      })
    : transaction;

  return (
    <div>
      <div className="flex justify-end mr-55 ">
        <select 
        className="cursor-pointer"
        value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value=""disabled>Sort</option>
          <option value="az">AZ</option>
          <option value="za">ZA</option>
          <option value="newToOld">new</option>
          <option value="oldToNew">old</option>
        </select>
      </div>

      {sortedTransaction.map((items, index) => (
        <div key={items.id}>
          <Name transaction={items} srNo={index + 1} />
        </div>
      ))}

      
    </div>
  );
}

export default Sort;
