import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import useNotifications from "../hooks/useNotifications";
import { Text, View } from "react-native";

const Tab = createBottomTabNavigator();
const BarChart = () => {
  return (
    <View>
      <Text>Bar chart</Text>
    </View>
  );
};
const LineChart = () => {
  return (
    <View>
      <Text>Line chart</Text>
    </View>
  );
};
const ChartNavigator = () => {
  useNotifications();

  return (
    <Tab.Navigator>
      <Tab.Screen name="میله ای" component={BarChart} />
      <Tab.Screen name="خطی" component={LineChart} />
    </Tab.Navigator>
  );
};

export default ChartNavigator;
