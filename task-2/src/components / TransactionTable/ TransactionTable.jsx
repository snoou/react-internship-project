import { useState } from "react";
import "./TransactionTable.css";
import Data from "../data/data";

const TransactionTable = () => {
    const [visibleCount, setVisibleCount] = useState(0);

    const addTransaction = () => {
        if (visibleCount < Data.length) {
            setVisibleCount(visibleCount + 1);
        }
    };

    return (
        <div className="size">
            <div className="header">
                <h2>تراکنش‌ها</h2>
                <button  onClick={addTransaction}> <img src="./src/assets/icon/Plus.png" alt="icon"></img>افزودن تراکنش </button>
            </div>

            <div className="div-table">
                {visibleCount > 0 && (
                    <div className="title">
                        <div>تاریخ</div>
                        <div>درآمد (تومان)</div>
                        <div>هزینه (تومان)</div>
                        <div>شرح</div>
                    </div>
                )}

                <div className="table-body">
                    {visibleCount === 0 ? (
                        <div
                            className="not"
                        >
                            <img src="./src/assets/icon/Danger Circle.png" alt="icon"></img>

                                شما هنوز تراکنشی وارد نکرده‌اید

                        </div>
                    ) : (
                        Data.slice(0, visibleCount).map((tx) => (
                            <div className="info" key={tx.id}>
                                <div className="transaction-date">{tx.date}</div>
                                <div className="transaction-income">
                                    {tx.income ? `${tx.income}+` : ""}
                                </div>
                                <div className="transaction-expense">
                                    {tx.expense ? `${tx.expense}-` : ""}
                                </div>
                                <div className="transaction-description">{tx.description}</div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default TransactionTable;
