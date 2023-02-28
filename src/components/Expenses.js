import { React, useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";

import "./Expenses.css";

const Expenses = (props) => {
  const [year, changeSelectedYear] = useState("2023");
  const filterChangeHandler = (year) => {
    // console.log(year);
    changeSelectedYear(year);
  };

  const filteredItems = props.data.filter((item) => {
    return item.date.getFullYear().toString() === year;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
        <ExpenseList items={filteredItems} />
      </Card>
    </li>
  );
};

export default Expenses;
