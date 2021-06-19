import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import navigation from "./rootNavigation";
import useNotifications from "../hooks/useNotifications";
import MainScreen from "./../screens/MainScreen";
import ReportsScreen from "./../screens/ReportsScreen";
import BudjetScreen from "./../screens/Budget";
import KaranehScreen from "./../screens/KaranehScreen";
import MainNavigator from "./MainNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useNotifications();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="صفحه اصلی"
        component={MainNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="ListingEdit"
        component={AccountNavigator}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        })}
      /> */}

      <Tab.Screen
        name="آمار"
        component={ReportsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="finance" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="کارانه"
        component={KaranehScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.KARANEH)}
            />
          ),
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons
          //     name="card-account-details-outline"
          //     color={color}
          //     size={size}
          //   />
          // ),
        })}
      />
      <Tab.Screen
        name="بودجه"
        component={BudjetScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bank" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="حساب کاربری"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
