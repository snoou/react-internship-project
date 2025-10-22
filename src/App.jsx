import './App.css'
import { useState, useEffect } from "react"; // 1. import useEffect
import TransactionTable from "./components / TransactionTable/ TransactionTable";

const STORAGE_KEY = "expenseTrackerData";

const getInitialTransactions = () => {
  const storedData = localStorage.getItem(STORAGE_KEY);
  if (storedData) {
    try {
      return JSON.parse(storedData);
    } catch (error) {
      console.error("Error parsing stored transactions:", error);
      return [];
    }
  }
  return [];
};

function App() {
  const [transactions, setTransactions] = useState(getInitialTransactions);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions]);
  const addTransaction = (newTx) => {
    const transactionToAdd = {
      ...newTx,
      amount: Number(newTx.amount)
    };
    setTransactions((prevTransactions) => [...prevTransactions, transactionToAdd]);
  };
  return (
    <>
      <TransactionTable data={transactions} onAddTransaction={addTransaction} />
    </>
  );
}

export default App;