
import "./Expenseform.css"
import React, { useState } from 'react';

function Expenses() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Expense Form Submitted:', { title, amount, date });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="expense-item">
        <div>
          <label htmlFor="title" className="expense-item__location">Expense Title:</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label htmlFor="amount" className="expense-item__location">Expense Amount:</label>
          <input type="text" id="amount" value={amount} onChange={handleAmountChange} />
        </div>
        <div>
          <label htmlFor="date" className="expense-item__location">Expense Date:</label>
          <input type="date" id="date" value={date} onChange={handleDateChange} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}

export default Expenses;
