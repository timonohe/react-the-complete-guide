import { useState } from 'react';
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
    setAddNewExpense(false);
    props.onAddExpense(expenseData);
  };
  const cancelAddExpense = () => setAddNewExpense(false);
  const showExpenseFormHandler = () => setAddNewExpense(true);

  const [addNewExpense, setAddNewExpense] = useState(false);

  return (
    <div className="new-expense">
      {addNewExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelAddExpense} />}
      {!addNewExpense && <button onClick={showExpenseFormHandler}>Add new Expense</button>}
    </div>
  );
};

export default NewExpense;
