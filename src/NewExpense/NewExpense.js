import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [newExpense, setNewExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.addExpenseHandler(expenseData);
  };

  const changeNewExpenseState = (event) => {
    setNewExpense(true);
  };

  const CancelNewExpenseState = (event) => {
    setNewExpense(false);
  };

  return (
    <div className="new-expense">
      {!newExpense && (
        <button onClick={changeNewExpenseState}>Add New Expense</button>
      )}
      {newExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={CancelNewExpenseState}
          newExpenseState={setNewExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
