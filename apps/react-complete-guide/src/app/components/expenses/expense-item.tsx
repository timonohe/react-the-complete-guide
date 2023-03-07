import Card from '../ui/card';
import ExpenseDate from './expense-date';
import './expense-item.scss';

const ExpenseItem = (props: any) => {
  const clickHandler = () => {
    console.log('Clicked!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
