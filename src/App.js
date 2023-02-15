import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenseData = [
    {
      id: "e1",
      date: new Date(2023, 1, 10),
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

  return (
    <div>
      <h1>App.js main div</h1>
      {expenseData.map((item) => {
        return (
          <ExpenseItem
            date={item.date}
            title={item.title}
            amount={item.amount}
            id={item.id}
          />
        );
      })}
    </div>
  );
}

export default App;
