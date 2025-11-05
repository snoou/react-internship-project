import { createContext, useReducer, useEffect } from "react";
import GetInitialTransactions from "../utils/GetInitialTransactions";

export const TransactionContext = createContext();

const transactionReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TRANSACTION":
            return [...state, action.payload];
        case "DELETE_TRANSACTION":
            return state.filter((tx) => tx.id !== action.payload);
        default:
            return state;
    }
};

export const TransactionProvider = ({ children }) => {
    const STORAGE_KEY = "expenseTrackerData";

    const [transactions, dispatch] = useReducer(
        transactionReducer,
        GetInitialTransactions()
    );

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
    }, [transactions]);

    return (
        <TransactionContext.Provider value={{ transactions, dispatch }}>
            {children}
        </TransactionContext.Provider>
    );
};
