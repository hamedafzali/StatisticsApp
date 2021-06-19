import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Chart from "../components/Chart";
import { useFonts } from "@use-expo/font";
import Screen from "../components/Screen";
import colors from "../config/colors";

const PayeshScreen = () => {
  const [loaded] = useFonts({
    IranNastaliq: require("../assets/fonts/IranNastaliq.ttf"),
    Harmattan: require("../assets/fonts/Harmattan-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Screen>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          margin: 10,
          backgroundColor: colors.light,
          shadowColor: colors.dark,
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 10,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            //fontWeight: "bold",
            fontSize: 30,
            fontFamily: "Harmattan",
          }}
        >
          پست بانک 1399 در یک نگاه
        </Text>
      </View>
      {/* <PDFReader /> */}
      <ScrollView>
        <Chart title="سپرده قرض الحسنه جاری" />
        <Chart title="سپرده قرض الحسنه پس انداز" />
        <Chart title="سپرده قرض الحسنه کوتاه مدت" />
        <Chart title="سپرده قرض الحسنه بلند مدت" />
        <Chart title="سپرده نقدی صدور ضمانتنامه" />
        <Chart title="مانده مطالبات موزون" />
        <Chart title="نسبت مطالبات غیر جاری به تسهیلات" />
        <Chart title="درآمدهای غیر مشاع" />
        <Chart title="افزایش مبلغ چکهای عادی واگذاری" />
        <Chart title="توقف دستگاه خودپرداز" />
        <Chart title="نسبت پایانه های فروش زیان ده به کل " />
        <Chart title="تعداد مشتریان اینترنت بانک " />
        <Chart title="تعداد مشتریان همراه بانک " />
      </ScrollView>
    </Screen>
  );
};

export default PayeshScreen;
