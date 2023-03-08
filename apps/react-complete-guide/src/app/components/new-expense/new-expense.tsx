import { Expense } from '../models/expense';
import ExpenseForm from './expense-form';
import './new-expense.scss';

type NewExpenseProps = {
  onAddExpense: (expense: Expense) => void
}

const NewExpense = (props: NewExpenseProps) => {
  const saveExpenseDataHandler = (enteredExpenseData: Expense) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
