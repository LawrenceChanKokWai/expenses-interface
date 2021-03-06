import ExpensesItem from "./ExpensesItem";

function Expenses(props) {
  return (
    <div>
      <ExpensesItem
        date={props.items[0].date}
        title={props.items[0].title}
        amount={props.items[0].amount}
      />
      <ExpensesItem
        date={props.items[1].date}
        title={props.items[1].title}
        amount={props.items[1].amount}
      />
      <ExpensesItem
        date={props.items[2].date}
        title={props.items[2].title}
        amount={props.items[2].amount}
      />
      <ExpensesItem
        date={props.items[3].date}
        title={props.items[3].title}
        amount={props.items[3].amount}
      />
    </div>
  );
}
export default Expenses;
