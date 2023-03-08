import { useState } from 'react';
import { Expense } from '../models/expense';

import Card from '../ui/card';
import ExpenseDate from './expense-date';
import './expense-item.scss';

type ExpenseItemProps = {
  expense: Expense
}

const ExpenseItem = (props: ExpenseItemProps) => {
  const [title, setTitle] = useState(props.expense.title);

  const clickHandler = () => {
    setTitle('Updated!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
