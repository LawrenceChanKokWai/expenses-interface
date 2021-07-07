import "./ExpensesItem.css";

function ExpensesItem(props) {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-item">
      <div>{year}</div>
      <div>{month}</div>
      <div>{day}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
export default ExpensesItem;
