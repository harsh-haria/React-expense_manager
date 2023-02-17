import "./ExpenseItem.css";

import { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  let expenseAmount = props.amount;
  const [title, setTitle] = useState(props.title);

  let onButtonClick = () => {
    setTitle("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">&#8377;{expenseAmount}</div>
        <button onClick={onButtonClick}>update title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
