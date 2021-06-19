import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import NewsScreen from "./../screens/NewsScreen";
import HelpdeskScreen from "./../screens/HelpdeskScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
    <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
    <Stack.Screen name={routes.NEWS} component={NewsScreen} />
    <Stack.Screen name={routes.HELPDESK} component={HelpdeskScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
