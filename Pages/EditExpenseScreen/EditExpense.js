import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import CustomButton from "../../Utilities/CustomButton";

function EditExpense() {
  const route = useRoute();
  const item = route.params.itemData;

  const [expenseObj, setExpenseObj] = useState(item);

  function expenseItemUpdateHandler() {}

  function onAmountChangeHandler(enteredValue) {
    setExpenseObj((prev) => {
      return { ...prev, amount: enteredValue };
    });
  }
  function onDescriptionChangeHandler(enteredValue) {
    setExpenseObj((prev) => {
      return { ...prev, description: enteredValue };
    });
  }
  function onDateChangeHandler(enteredValue) {
    setExpenseObj((prev) => {
      return { ...prev, date: enteredValue };
    });
  }

  return (
    <View style={styles.editExpenseMainContainer}>
      <View style={styles.editExpenseSubMainContainer}>
        <TextInput
          style={styles.editExpensesInputText}
          placeholder="enter details of expense"
          value={expenseObj.description}
          keyboardType="default"
          onChangeText={onDescriptionChangeHandler}
        ></TextInput>
        <TextInput
          style={styles.editExpensesInputText}
          placeholder="enter amount"
          value={expenseObj.amount}
          keyboardType="number-pad"
          onChangeText={onAmountChangeHandler}
        ></TextInput>
        <TextInput
          style={styles.editExpensesInputText}
          placeholder="enter any remarks"
          value={expenseObj.date}
          keyboardType="numbers-and-punctuation"
          onChangeText={onDateChangeHandler}
        ></TextInput>
        <View style={styles.editExpenseBtnGrpContainer}>
          <CustomButton
            bgColor="#fff"
            fColor="white"
            title="Update"
            btnBorderRadius={8}
            expenseObj={expenseObj}
          ></CustomButton>
          <CustomButton
            bgColor="#eb4d4b"
            fColor="white"
            title="Delete"
            btnBorderRadius={8}
            expenseObj={expenseObj}
          ></CustomButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  editExpenseMainContainer: {
    backgroundColor: "#f9ca24",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  editExpenseSubMainContainer: {
    backgroundColor: "#4834d4",
    width: "90%",
    height: "70%",
    borderRadius: 8,
    borderColor: "grey",
    elevation: 3,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.65,
    shadowRadius: 8,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  editExpensesInputText: {
    height: 40,
    width: "60%",
    backgroundColor: "white",
    borderRadius: 8,
    fontSize: 16,
  },
  editExpenseBtnGrpContainer: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-around",
  },
  editExpensesButton: {},
});

export default EditExpense;
