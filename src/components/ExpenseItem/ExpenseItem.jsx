import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";
import "./ExpenseItem.css";
import { useState } from "react";

export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHander = () => {
    setTitle("Teste");
    console.log("Clicked!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHander} className="ml-2">
        Change Title
      </button>
    </Card>
  );
}
