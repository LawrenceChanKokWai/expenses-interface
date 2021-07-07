import "./ExpensesItem.css";

function ExpensesItem() {
  const expensesDate = new Date(2021, 7, 7);
  const expensesTitle = "Medical";
  const expensesAmount = 20.32;

  return (
    <div className="expense-item">
      <div>{expensesDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expensesTitle}</h2>
        <div className="expense-item__price">${expensesAmount}</div>
      </div>
    </div>
  );
}
export default ExpensesItem;
