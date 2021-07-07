import "./ExpensesItem.css";

function ExpensesItem() {
  return (
    <div className="expense-item">
      <div>July 7 2021</div>
      <div className="expense-item__description">
        <h2>Medical</h2>
        <div className="expense-item__price">$20.32</div>
      </div>
    </div>
  );
}
export default ExpensesItem;
