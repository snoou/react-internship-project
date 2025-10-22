import { useState } from "react";
import "./TransactionTable.css";
import AddTransactionForm from "../AddTransactionForm/AddTransactionForm";

const TransactionTable = ({ data, onAddTransaction }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="size">
            <div className="header">
                <h2>تراکنش‌ها</h2>
                <button onClick={() => setIsModalOpen(true)}>
                    <img src="./src/assets/icon/Plus.png" alt="icon" />
                    افزودن تراکنش
                </button>
            </div>

            <div className="title">
                <div className="transaction-date-title">تاریخ</div>
                <div className="transaction-income-title">درآمد (تومان)</div>
                <div className="transaction-expense-title">هزینه (تومان)</div>
                <div className="transaction-description-title">شرح</div>
            </div>

            <div className="table-body">
                {data.length === 0 ? (
                    <div className="not">
                        <img src="./src/assets/icon/Danger Circle.png" alt="icon" />
                        شما هنوز تراکنشی وارد نکرده‌اید
                    </div>
                ) : (
                    data.map((tx, index) => (
                        <div className="info" key={index}>
                            <div className="transaction-date">{tx.date}</div>
                            <div className="transaction-income">
                                {tx.type === "income" ? `${tx.amount}+` : ""}
                            </div>
                            <div className="transaction-expense">
                                {tx.type === "expense" ? `${tx.amount}-` : ""}
                            </div>
                            <div className="transaction-description">{tx.description}</div>
                        </div>
                    ))
                )}
            </div>


            {isModalOpen && (
                <AddTransactionForm
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={(tx) => {
                        onAddTransaction(tx);
                        setIsModalOpen(false);
                    }}
                />
            )}
        </div>
    );
};

export default TransactionTable;
