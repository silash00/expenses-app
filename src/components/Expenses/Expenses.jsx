import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";

function Expenses({ props }) {
  return (
    <>
      <h1>Lets Get Starter</h1>
      <Card className="expenses">
        {props.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })}
      </Card>
    </>
  );
}

export default Expenses;