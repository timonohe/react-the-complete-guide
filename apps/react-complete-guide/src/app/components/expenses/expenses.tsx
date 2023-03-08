import { Expense } from '../models/expense';
import Card from '../ui/card';
import ExpenseItem from './expense-item';
import './expenses.scss';

type ExpensesProps = {
  expenses: Expense[];
};

const Expenses = (props: ExpensesProps) => {
  return (
    <Card className="expenses">
      <ExpenseItem expense={props.expenses[0]} />
      <ExpenseItem expense={props.expenses[1]} />
      <ExpenseItem expense={props.expenses[2]} />
      <ExpenseItem expense={props.expenses[3]} />
    </Card>
  );
};

export default Expenses;
