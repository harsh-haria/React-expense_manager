import React, { useState } from "react";

import NewExpense from "./NewExpense/NewExpense";

import Expense from "./components/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    date: new Date(2023, 1, 11),
    amount: 3200,
    title: "Concert Tickets",
  },
  {
    id: "e2",
    date: new Date(2023, 1, 14),
    amount: 260,
    title: "Lunch",
  },
  {
    id: "e3",
    date: new Date(2023, 1, 13),
    amount: 5000,
    title: "Gift box",
  },
  {
    id: "e4",
    date: new Date(2023, 4, 11),
    amount: 3200,
    title: "Concert Tickets",
  },
  {
    id: "e5",
    date: new Date(2022, 7, 19),
    amount: 3200,
    title: "Concert Tickets",
  },
];

const App = (props) => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const onAddExpense = (expense) => {
    // console.log(expenseData);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="ExpenseItems">
      <NewExpense addExpenseHandler={onAddExpense} />
      <Expense data={expenses} />
    </div>
  );
  //both the ways work. the syntax below is old syntax which was used before jsx was introduced.
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "2App.js main div"),
  //   React.createElement(Expense, { data: expenseData })
  // );
};

export default App;
