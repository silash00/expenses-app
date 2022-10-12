import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpensesFIlter/ExpensesFilter";
import ExpenseList from "../ExpensesList/ExpensesList";
import { useState } from "react";

function Expenses({ props }) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </>
  );
}

export default Expenses;
