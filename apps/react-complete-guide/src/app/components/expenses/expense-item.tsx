import { Expense } from '../models/expense';

import Card from '../ui/card';
import ExpenseDate from './expense-date';
import './expense-item.scss';

type ExpenseItemProps = {
  expense: Expense;
};

const ExpenseItem = (props: ExpenseItemProps) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
