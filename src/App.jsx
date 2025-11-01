import './App.css';
import { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable/TransactionTable';
import GetInitialTransactions from './utils/GetInitialTransactions/GetInitialTransactions';

function App() {
  const deleteTransaction = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((tx) => tx.id !== id)
    );
  };
  const STORAGE_KEY = 'expenseTrackerData';
  const [transactions, setTransactions] = useState(GetInitialTransactions);
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions]);
  const addTransaction = (newTx) => {
    const transactionToAdd = {
      ...newTx,
      amount: Number(newTx.amount),
    };
    setTransactions((prevTransactions) => [...prevTransactions, transactionToAdd]);
  };
  return (
    <>
      <TransactionTable data={transactions} onAddTransaction={addTransaction} onDeleteTransaction={deleteTransaction} ></TransactionTable>
    </>
  );
}

export default App;
