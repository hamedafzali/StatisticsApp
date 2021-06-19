import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{
        title: "",

        headerShown: true,
        headerStyle: { backgroundColor: "silver" },
        headerTintColor: "silver",
      }}
    />
    <Stack.Screen name="Guest" component={LoginScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
