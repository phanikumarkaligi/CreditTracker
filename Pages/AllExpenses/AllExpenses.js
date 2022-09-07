import React, { useContext } from "react";
import { View, Text, FlatList, useLayoutEffect } from "react-native";
import { DUMMY_EXPENSES } from "../../Data/Expenses";
import ExpenseItem from "./ExpenseItem";
import { expensesContext } from "../../Store/ExpensesStore";
import { useNavigation } from "@react-navigation/native";

function AllExpenses() {
  const expensesCtx = useContext(expensesContext);

  return (
    <View
      style={{
        backgroundColor: "#fff",
      }}
    >
      <FlatList
        data={expensesCtx.expenses}
        keyExtractor={(item) => item.id}
        renderItem={(itemData, index) => {
          return <ExpenseItem item={itemData.item} />;
        }}
      />
    </View>
  );
}

export default AllExpenses;
