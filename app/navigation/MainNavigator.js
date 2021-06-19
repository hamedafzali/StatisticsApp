import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";
import PayeshScreen from "./../screens/PayeshScreen";
import MainScreen from "./../screens/MainScreen";

const Stack = createStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.MAIN}
      component={MainScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.PAYESH99}
      component={PayeshScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default MainNavigator;
