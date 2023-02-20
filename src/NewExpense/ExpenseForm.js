import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
	//these individual states can be also combined into a single state with the use of object(key-value);
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredDate, setenteredDate] = useState("");
	const [enteredAmount, setenteredAmount] = useState(""); //even if a number it is still read as string

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};

	const dateChangeHandler = (event) => {
		setenteredDate(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setenteredAmount(event.target.value);
	};

	const printStateValues = (event) => {
		event.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: enteredDate,
		};
		console.log(expenseData);
		setEnteredTitle("");
		setenteredAmount("");
		setenteredDate("");
	};
	return (
		<form onSubmit={printStateValues}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						onChange={titleChangeHandler}
						value={enteredTitle}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						onChange={amountChangeHandler}
						value={enteredAmount}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2023-01-01"
						max="20223-12-31"
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
