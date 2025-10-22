import { useState } from "react";
import "./AddTransactionForm.css";

const AddTransactionForm = ({ onClose, onSubmit }) => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      date,
      amount,
      type,
      description,
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>افزودن تراکنش</h3>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <label>تاریخ:</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>

          <div className="row">
            <label>مبلغ (تومان)</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />

          </div>
          <div>
            <label>نوع تراکنش</label>
            <div className="type-t">
              <label>
                <input
                  type="radio"
                  name="type"
                  value="income"
                  checked={type === "income"}
                  onChange={() => setType("income")}
                />
                درآمد
              </label>
              <label>
                <input
                  type="radio"
                  name="type"
                  value="expense"
                  checked={type === "expense"}
                  onChange={() => setType("expense")}
                />
                هزینه
              </label>
            </div>
          </div>
          <div className="row">
            <label>شرح:</label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>

          <div className="buttons">
            <button type="button" onClick={onClose}>انصراف</button>

            <button type="submit">ثبت</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransactionForm;
