import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Authentication from "./Authentication";

const Stack = createNativeStackNavigator();
function AuthenticationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="toAuthScreen"
        component={Authentication}
        options={{ title: "Login or SignUp" }}
      />
    </Stack.Navigator>
  );
}

export default AuthenticationStack;
