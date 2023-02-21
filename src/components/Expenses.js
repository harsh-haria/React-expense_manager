import { React, useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
  const [year, changeSelectedYear] = useState("2023");
  const filterChangeHandler = (year) => {
    // console.log(year);
    changeSelectedYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
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
