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

  const filteredItems = props.data.filter(item => {
    return item.date.getFullYear().toString() === year;
  })

  var expenseContent = <p>No Items to display!</p>;

  if (filteredItems.length > 0) {
    expenseContent = filteredItems.map((item) => {
      return (
        <ExpenseItem
          key={item.id}
          date={item.date}
          title={item.title}
          amount={item.amount}
          id={item.id}
        />
      );
    })
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
      {expenseContent}
    </Card>
  );
};

export default Expenses;
