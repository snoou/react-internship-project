import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const UseContext = () => {
    const context = useContext(TransactionContext);
    const income = context.transactions.filter(tx => tx.type === "income")
    const expense = context.transactions.filter(tx => tx.type === "expense")
    const list = [income , expense]
    return list
}

export default UseContext;
