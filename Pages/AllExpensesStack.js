import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllExpenses from "./AllExpenses/AllExpenses";
import EditExpense from "./EditExpenseScreen/EditExpense";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AddExpense from "./AddNewExpense/AddExpense";
function AllExpensesStack() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#4834d4" },
        headerTintColor: "#dff9fb",
        headerRight: () => {
          return (
            <Pressable
              onPress={() => navigation.navigate("toAddExpenseScreen")}
            >
              <Ionicons name="add" size={24} color="white" />
            </Pressable>
          );
        },
      }}
    >
      <Stack.Screen
        name="toAllExpensesScreen"
        component={AllExpenses}
        options={{ headerTitle: "All Expenses" }}
      />
      <Stack.Screen
        name="toEditExpenseScreen"
        component={EditExpense}
        options={{
          headerTitle: "Edit Expense",
        }}
      />
      <Stack.Screen
        name="toAddExpenseScreen"
        component={AddExpense}
        options={{
          headerTitle: "Add Expense",
        }}
      />
    </Stack.Navigator>
  );
}

export default AllExpensesStack;
