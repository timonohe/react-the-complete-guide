import { Expense } from '../models/expense';
import ExpenseItem from './expense-item';
import './expenses-list.scss';

type ExpensesListProps = {
  expenses: Expense[];
};

const ExpensesList = (props: ExpensesListProps) => {
  if (props.expenses.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((expense: Expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </ul>
  );
};

export default ExpensesList;
