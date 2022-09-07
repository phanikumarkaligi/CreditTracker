import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { View, Button } from "react-native";
import { expensesContext } from "../Store/ExpensesStore";

function CustomButton({
  children,
  bgColor,
  fColor,
  btnWidth,
  btnHeight,
  btnMargin,
  btnPadding,
  btnBorderRadius,
  title,
  expenseObj,
}) {
  const ctx = useContext(expensesContext);
  console.log("expesnse Obj", expenseObj);
  const navigator = useNavigation();
  function pressHandler() {
    if (title === "Update") {
      ctx.updateExpense(expenseObj);
      navigator.pop();
    } else if (title === "Delete") {
      ctx.deleteExpense(expenseObj.id);
      navigator.pop();
    } else if (title === "Add") {
      const date = new Date();
      const uniqueIdentifier = date.toString();
      const newExpenseItem = { ...expenseObj, id: uniqueIdentifier };
      ctx.addExpense(newExpenseItem);
      navigator.pop();
    }
  }

  return (
    <View
      style={{
        backgroundColor: bgColor,
        color: fColor,
        width: btnWidth,
        height: btnHeight,
        margin: btnMargin,
        padding: btnPadding,
        borderRadius: btnBorderRadius,
        flex: 1,
      }}
    >
      <Button onPress={pressHandler} title={title}>
        {children}
      </Button>
    </View>
  );
}

export default CustomButton;
