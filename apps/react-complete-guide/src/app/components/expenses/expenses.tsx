import { useState } from 'react';
import { Expense } from '../models/expense';
import Card from '../ui/card';
import ExpenseItem from './expense-item';
import ExpensesFilter from './expenses-filter';
import './expenses.scss';

type ExpensesProps = {
  expenses: Expense[];
};

const Expenses = (props: ExpensesProps) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
        <ExpenseItem expense={props.expenses[0]} />
        <ExpenseItem expense={props.expenses[1]} />
        <ExpenseItem expense={props.expenses[2]} />
        <ExpenseItem expense={props.expenses[3]} />
      </Card>
    </div>
  );
};

export default Expenses;
