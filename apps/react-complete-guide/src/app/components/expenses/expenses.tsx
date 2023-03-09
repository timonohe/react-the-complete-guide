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

  const filteredExpenses = props.expenses.filter((expense: Expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        {filteredExpenses.map((expense: Expense) => (
            <ExpenseItem key={expense.id} expense={expense} />
          ))}
        ;
      </Card>
    </div>
  );
};

export default Expenses;
