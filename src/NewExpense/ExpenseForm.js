import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredDate, setenteredDate] = useState("");
	const [enteredAmount, setenteredAmount] = useState(0);

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};

	const dateChangeHandler = (event) => {
		setenteredDate(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setenteredAmount(event.target.value);
	};

	const printStateValues = () => {
		console.log(enteredTitle, enteredDate, enteredAmount);
	};
	return (
		<form>
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
						onChange={dateChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2023-01-01"
						max="20223-12-31"
						onChange={amountChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit" onClick={printStateValues}>
					Add Expense
				</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
