import "./TransactionTable.css"
import Data from "../data/data";

const TransactionTable = () => {
    return (
        <div className="size">
            <h2>تراکنش‌ها</h2>
            <div className="div-table">
                <div className="title">
                    <div>تاریخ</div>
                    <div>درآمد (تومان)</div>
                    <div>هزینه (تومان)</div>
                    <div>شرح</div>
                </div>

                <div className="table-body">
                    {Data.map((tx) => (
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
                    ))}
                </div>
            </div>
        </div>

    );
};

export default TransactionTable;
