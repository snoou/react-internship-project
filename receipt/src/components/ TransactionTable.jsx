import "../style/TransactionTable.css"
const Data = [
  { date: "۱۴۰۴/۰۶/۳۱", description: "قسط آخر پروژه کاریار", income: 3100000, expense: 0 },
  { date: "۱۴۰۴/۰۶/۲۷", description: "خرید لباس", income: 0, expense: 1230000 },
  { date: "۱۴۰۴/۰۶/۲۵", description: "سود سپرده", income: 17000, expense: 0 },
  { date: "۱۴۰۴/۰۶/۲۰", description: "غذا", income: 0, expense: 440000 },
  { date: "۱۴۰۴/۰۶/۱۴", description: "سوپرمارکت", income: 0, expense: 562200 },
  { date: "۱۴۰۴/۰۶/۰۶", description: "پارکینگ", income: 0, expense: 136000 },
  { date: "۱۴۰۴/۰۶/۰۴", description: "شارژ ایرانسل", income: 0, expense: 55000 },
  { date: "۱۴۰۴/۰۶/۰۱", description: "کادو تولد", income: 5000000, expense: 0 },
  { date: "۱۴۰۴/۰۵/۲۵", description: "دندان‌پزشکی", income: 0, expense: 9800000 },
  { date: "۱۴۰۴/۰۵/۲۰", description: "غذا", income: 0, expense: 250000 },
  { date: "۱۴۰۴/۰۵/۱۷", description: "سوپرمارکت", income: 0, expense: 758000 },
  { date: "۱۴۰۴/۰۵/۱۷", description: "غذا", income: 0, expense: 110000 },
  { date: "۱۴۰۴/۰۵/۱۶", description: "قسط سوم پروژه کاریار", income: 3100000, expense: 0 },
];


const TransactionTable = () => {
    return (
        <>
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
            {Data.map((tx, index) => (
                <div className="info" key={index}>
                    <div className="transaction-date">{tx.date}</div>

                    <div className="transaction-income">
                        {tx.income ? `${tx.income.toLocaleString("fa-IR")}+` : ""}
                    </div>

                    <div className="transaction-expense">
                        {tx.expense ? `${tx.expense.toLocaleString("fa-IR")}-` : ""}
                    </div>

                    <div className="transaction-description">{tx.description}</div>
                </div>
            ))}
        </div>
    </div>
</div>
        </>
    );
};

export default TransactionTable;
