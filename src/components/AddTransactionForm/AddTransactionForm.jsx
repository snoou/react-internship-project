import { useState } from 'react';
import './AddTransactionForm.css';
import Id from '../../utils/Id/Id';
import VectorIcon from '../../assets/icon/Vector.png'

const AddTransactionForm = ({ onClose, onSubmit }) => {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !amount || !description) {
      setError('لطفاً تمام فیلدها را پر کنید');
      return;
    }

    setError('');

    onSubmit({
      id: Id(),
      date,
      amount,
      type,
      description,
    });

    setDate('');
    setAmount('');
    setType('income');
    setDescription('');
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className='head'>
          <h3>افزودن تراکنش</h3>
          <img src={VectorIcon} alt="کنسل" onClick={onClose} ></img>
        </div>

        <form onSubmit={handleSubmit}>
          {error && <p className="error">{error}</p>}

          <div className="row">
            <label>تاریخ:</label>
            <input type="date" className="custom-date-input" value={date || ""} onChange={(e) => setDate(e.target.value)} />
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
                  checked={type === 'income'}
                  onChange={() => setType('income')}
                />
                درآمد
              </label>
              <label>
                <input
                  type="radio"
                  name="type"
                  value="expense"
                  checked={type === 'expense'}
                  onChange={() => setType('expense')}
                />
                هزینه
              </label>
            </div>
          </div>

          <div className="row">
            <label>شرح:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="buttons">
            <button type="button" onClick={onClose}>
              انصراف
            </button>
            <button type="submit">ثبت</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransactionForm;
