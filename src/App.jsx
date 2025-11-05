import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TransactionTable from './components/TransactionTable/TransactionTable';
import GetInitialTransactions from './utils/GetInitialTransactions';
import Layout from './components/Layout/Layout';
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';
function App() {
  const STORAGE_KEY = 'expenseTrackerData';
  const [transactions, setTransactions] = useState(GetInitialTransactions);
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions]);
  const deleteTransaction = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((tx) => tx.id !== id)
    );
  };
  const addTransaction = (newTx) => {
    const transactionToAdd = {
      ...newTx,
      amount: Number(newTx.amount),
    };
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      transactionToAdd,
    ]);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          < Route path='expenses' element={<TransactionTable
            data={transactions}
            onAddTransaction={addTransaction}
            onDeleteTransaction={deleteTransaction}
          />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
