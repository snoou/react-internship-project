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
                <table className="table">
                    <thead>
                        <tr className="title">
                            <th  >تاریخ</th>
                            <th >درآمد (تومان)</th>
                            <th >هزینه (تومان)</th>
                            <th >شرح</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Data.map((tx, index) => (
                            <tr className="info" key={index}>
                                <td className="date">{tx.date}</td>
                                <td style={{ color: tx.income ? "#3EBD93" : "black" }}>
                                    {tx.income ? `${tx.income.toLocaleString("fa-IR")}+` : ""}
                                </td>
                                <td style={{  color: tx.expense ? "#EF4E4E" : "black" }}>
                                    {tx.expense ? `${tx.expense.toLocaleString("fa-IR")}-` : ""}
                                </td>
                                <td className="date" >{tx.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TransactionTable;
