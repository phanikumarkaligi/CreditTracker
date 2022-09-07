import React, { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import { expensesContext } from "../Store/ExpensesStore";
import ExpenseItem from "./AllExpenses/ExpenseItem";

function RecentExpenses() {
  const expensesCtx = useContext(expensesContext);
  const modifiedExpenses = expensesCtx.expenses.map((each) => {
    const idToDate = new Date(each.id);
    const hrsPart = idToDate.getSeconds();
    return { ...each, hrsPart };
  });
  const recentExpenses = modifiedExpenses.filter((each) => each.hrsPart < 20);
  console.log(expensesCtx.expenses);
  return (
    <View
      style={{
        backgroundColor: "#fff",
      }}
    >
      <FlatList
        data={recentExpenses}
        keyExtractor={(item) => item.id}
        renderItem={(itemData, index) => {
          return <ExpenseItem item={itemData.item} />;
        }}
      />
    </View>
  );
}

export default RecentExpenses;
