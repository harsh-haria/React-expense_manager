import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Concert Tickets";
  // const expenseAmount = 3200;
  // const expenseDate = props.date;
  const expenseTitle = props.title;
  const expenseAmount = props.amount;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">&#8377;{expenseAmount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
