import './App.css'
import { useState } from "react";
import TransactionTable from "./components / TransactionTable/ TransactionTable";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTx) => {
    setTransactions([...transactions, newTx]);
  };

  return (
    <>
      <TransactionTable data={transactions} onAddTransaction={addTransaction} />
    </>
  );
}

export default App;
