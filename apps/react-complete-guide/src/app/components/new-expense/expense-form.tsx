import { ChangeEvent, useState } from 'react';
import { Expense } from '../models/expense';
import './expense-form.scss';

type ExpenseFormProps = {
  onSaveExpenseData: (expenseData: Expense) => void;
  onCancel: () => void;
};

const ExpenseForm = (props: ExpenseFormProps) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value
    //   };
    // });
  };

  const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value
    //   };
    // });
  };

  const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredDate: event.target.value
    //   };
    // });
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    const expenseData: Expense = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controlls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
