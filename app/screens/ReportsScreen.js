import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
//import { LineChart, PieChart, BarChart } from "../components/Chart";
import ScrollSwagger from "./ScrollSwagger";
import Screen from "../components/Screen";
import defaultStyles from "../config/styles";
import routes from "../navigation/routes";
import { ListItem, ListItemSeparator } from "../components/lists";
import { ProgressCircleExample } from "./ChartTest";

const ReportsScreen = () => {
  const data = [
    {
      title: "فروردین",
      icon: {
        name: "newspaper",
        backgroundColor: defaultStyles.colors.light,
      },
      targetScreen: routes.NEWS,
    },

    {
      title: "اردیبهشت",
      icon: {
        name: "account-search",
        backgroundColor: defaultStyles.colors.light,
      },
      targetScreen: routes.HELPDESK,
    },
    {
      title: "خرداد",
      icon: {
        name: "email",
        backgroundColor: defaultStyles.colors.light,
      },
      targetScreen: routes.MESSAGES,
    },
    {
      title: "تیر",
      icon: {
        name: "keyboard-settings",
        backgroundColor: defaultStyles.colors.light,
      },
    },
    {
      title: "مرداد",
      icon: {
        name: "newspaper",
        backgroundColor: defaultStyles.colors.light,
      },
      targetScreen: routes.NEWS,
    },

    {
      title: "شهریور",
      icon: {
        name: "account-search",
        backgroundColor: defaultStyles.colors.light,
      },
      targetScreen: routes.HELPDESK,
    },
    {
      title: "مهر",
      icon: {
        name: "email",
        backgroundColor: defaultStyles.colors.light,
      },
      targetScreen: routes.MESSAGES,
    },
    {
      title: "آبان",
      icon: {
        name: "keyboard-settings",
        backgroundColor: defaultStyles.colors.light,
      },
    },
    {
      title: "آذر",
      icon: {
        name: "newspaper",
        backgroundColor: defaultStyles.colors.light,
      },
      targetScreen: routes.NEWS,
    },

    {
      title: "دی",
      icon: {
        name: "account-search",
        backgroundColor: defaultStyles.colors.light,
      },
      targetScreen: routes.HELPDESK,
    },
    {
      title: "بهمن",
      icon: {
        name: "email",
        backgroundColor: defaultStyles.colors.light,
      },
      targetScreen: routes.MESSAGES,
    },
    {
      title: "اسفند",
      icon: {
        name: "keyboard-settings",
        backgroundColor: defaultStyles.colors.light,
      },
    },
  ];
  const Title = () => {
    return (
      <ListItem
        title="حامد افضلی نژاد"
        subTitle="کارشناس مسئول اداره کل آمار و بودجه"
        image={require("../assets/hamed.jpg")}
      />
    );
  };
  return (
    <Screen>
      <ScrollSwagger data={data} Title={Title} Chart={ProgressCircleExample} />
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});
export default ReportsScreen;
