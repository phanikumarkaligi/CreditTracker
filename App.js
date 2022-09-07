import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import RecentExpenses from "./Pages/RecentExpenses";
import AllExpensesStack from "./Pages/AllExpensesStack";
import ExpensesStoreProvider from "./Store/ExpensesStore";
import { Ionicons } from "@expo/vector-icons";
import AuthenticationStack from "./Pages/Authentication/AuthenticationStack";
import { useState } from "react";

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  // state for deciding which stack to display either login or welcome
  const [stackType, setStackType] = useState("Login");

  function PlusComponent() {
    return (
      <Pressable>
        <Ionicons name="star" size={24} color="white" />
      </Pressable>
    );
  }

  return (
    <ExpensesStoreProvider>
      <NavigationContainer>
        {stackType === "Login" && <AuthenticationStack />}
        {stackType === "Welcome" && (
          <Tab.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#4834d4" },
              headerTintColor: "#dff9fb",
            }}
          >
            <Tab.Screen
              name="toRecentExpensesScreen"
              component={RecentExpenses}
              options={{
                title: "My Recent Expenses",
                tabBarStyle: { backgroundColor: "#4834d4" },
                tabBarActiveBackgroundColor: "#f9ca24",
                tabBarIcon: (focused, color, size) => {
                  return <Ionicons name="time" color="white" size={24} />;
                },
              }}
            />
            <Tab.Screen
              name="toAllExpensesStack"
              component={AllExpensesStack}
              options={{
                title: "My All Expenses",
                tabBarStyle: { backgroundColor: "#4834d4" },
                headerShown: false,
                tabBarIcon: (focused, color, size) => {
                  return <Ionicons name="home" color="white" size={24} />;
                },
                tabBarActiveBackgroundColor: "#f9ca24",
                headerRight: () => {
                  return (
                    <Pressable>
                      {/* <Ionicons name="star" size={24} color="white" /> */}
                      <Text>Add</Text>
                    </Pressable>
                  );
                },
              }}
            />
          </Tab.Navigator>
        )}
      </NavigationContainer>
    </ExpensesStoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
