import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.data.map((item) => {
        return (
          <ExpenseItem
            date={item.date}
            title={item.title}
            amount={item.amount}
            id={item.id}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
