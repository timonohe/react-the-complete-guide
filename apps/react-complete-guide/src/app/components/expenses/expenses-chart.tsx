import Chart from "../chart/chart";
import { DataPoint } from "../models/data-point";
import { Expense } from "../models/expense";

type ExpensesChartProps = {
  expenses: Expense[];
}

const ExpensesChart = (props: ExpensesChartProps) => {
  const chartDataPoints: DataPoint[] = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 }
  ];

  props.expenses.forEach((expense: Expense) => {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += Number(expense.amount);
  });

  return <Chart dataPoints={chartDataPoints} />
};

export default ExpensesChart;