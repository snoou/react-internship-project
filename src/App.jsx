import './App.css';
import { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable/TransactionTable';
import GetInitialTransactions from './utils/GetInitialTransactions/GetInitialTransactions';
import DeleteTransaction from './utils/DeleteTransaction/DeleteTransaction';

function App() {
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
      <TransactionTable data={transactions} onAddTransaction={addTransaction}  onDeleteTransaction={DeleteTransaction} ></TransactionTable>
    </>
  );
}

export default App;
