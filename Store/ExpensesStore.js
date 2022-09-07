import React, { useState } from "react";
const initialExpenses = [
  { id: "100", description: "test descp", amount: "100", date: "2222-22-22" },
];
export const expensesContext = React.createContext(initialExpenses);

function ExpensesStoreProvider(props) {
  const [expenses, setExpenses] = useState([
    { id: "100", description: "test descp", amount: "100", date: "2222-22-22" },
  ]);

  const addExpense = (expenseItem) => {
    setExpenses((prev) => {
      return [...prev, expenseItem];
    });
  };

  const updateExpense = (item) => {
    setExpenses((prev) => {
      const thatItemIndex = prev.findIndex((each) => each.id === item.id);
      const stateCopy = [...prev];
      stateCopy[thatItemIndex] = item;
      return stateCopy;
    });
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => {
      const filteredItems = [...prev].filter((each) => each.id !== id);
      return filteredItems;
    });
  };

  return (
    <expensesContext.Provider
      value={{
        expenses,
        addExpense,
        updateExpense,
        deleteExpense,
      }}
    >
      {props.children}
    </expensesContext.Provider>
  );
}

export default ExpensesStoreProvider;
