import "./ExpenseDate.css";

function ExpenseDate(props) {
  const expenseDay = props.date.toLocaleString("pt-BR", { day: "2-digit" });
  const expenseMonth = props.date.toLocaleString("pt-BR", { month: "long" });
  const expenseYear = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{expenseDay}</div>
      <div className="expense-date__month">{expenseMonth}</div>
      <div className="expense-date__year">{expenseYear}</div>
    </div>
  );
}

export default ExpenseDate;
