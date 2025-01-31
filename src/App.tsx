import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import React, { useState } from "react";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import Message from "./Messgae";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/conponents/ExpenseList";
import ExpenseFilter from "./expense-tracker/conponents/ExpenseFilter";
import ExpenseForm from "./expense-tracker/conponents/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Rent", amount: 1000, category: "Home" },
    { id: 2, description: "Groceries", amount: 100, category: "Food" },
    { id: 3, description: "Gas", amount: 40, category: "Car" },
  ]);

  const [show, setShow] = useState("");

  const visibleExpenses = show
    ? expenses.filter((e) => e.category === show)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm onSubmit={(data) => setExpenses([...expenses, { ...data, id: expenses.length + 1 }])} />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelect={(value) => setShow(value)} />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses((expenses) => expenses.filter((e) => e.id !== id))
        }
      />
    </div>
  );
}

export default App;
