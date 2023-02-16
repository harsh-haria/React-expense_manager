import React from "react";

import Expense from "./components/Expenses";

const App = () => {
  const expenseData = [
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
  ];

  // return (
  //   <div className="ExpenseItems">
  //     <h1>App.js main div</h1>
  //     <Expense data={expenseData} />
  //   </div>
  // );
  //both the ways work. the syntax below is old syntax which was used before jsx was introduced.
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "2App.js main div"),
    React.createElement(Expense, { data: expenseData })
  );
};

export default App;
