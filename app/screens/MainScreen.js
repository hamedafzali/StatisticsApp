import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Chart from "../components/Chart";
import { useFonts } from "@use-expo/font";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";

const MainScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    IranNastaliq: require("../assets/fonts/IranNastaliq.ttf"),
    Harmattan: require("../assets/fonts/Harmattan-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Screen>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: 200,
              backgroundColor: colors.light,
              borderColor: colors.dark,
              borderWidth: 1,
              borderRadius: 20,
              margin: 10,
              shadowColor: colors.dark,
              shadowOffset: { width: 10, height: 10 },
              shadowOpacity: 1,
              shadowRadius: 10,
              elevation: 10,
              overflow: "hidden",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.PAYESH99)}
            >
              <Image
                style={{ width: "100%", height: 200 }}
                source={require("../assets/payesh99.jpg")}
              />
            </TouchableOpacity>
          </View>

          <View style={{ height: 200, flexDirection: "row" }}>
            <View
              style={{
                flex: 0.5,
                borderColor: colors.dark,
                borderWidth: 1,
                borderRadius: 20,
                margin: 4,
                marginLeft: 10,
                backgroundColor: colors.light,
                shadowColor: colors.dark,
                shadowOffset: { width: 10, height: 10 },
                shadowOpacity: 0.8,
                shadowRadius: 10,
                elevation: 10,
                overflow: "hidden",
              }}
            >
              <Image
                style={{ width: "100%", height: 200 }}
                source={require("../assets/reports.jpg")}
              />
            </View>
            <View
              style={{
                flex: 0.5,
                borderColor: colors.dark,
                borderWidth: 1,
                borderRadius: 20,
                margin: 4,
                marginRight: 10,
                backgroundColor: colors.light,
                shadowColor: colors.dark,
                shadowOffset: { width: 10, height: 10 },
                shadowOpacity: 0.8,
                shadowRadius: 10,
                elevation: 10,
                overflow: "hidden",
              }}
            >
              <Image
                style={{ width: "100%", height: 200 }}
                source={require("../assets/payesh00.jpg")}
              />
            </View>
          </View>
          <View
            style={{
              height: 200,
              backgroundColor: colors.light,
              borderColor: colors.dark,
              borderWidth: 1,
              borderRadius: 20,
              margin: 10,
              shadowColor: colors.dark,
              shadowOffset: { width: 10, height: 10 },
              shadowOpacity: 0.8,
              shadowRadius: 10,
              elevation: 10,
              overflow: "hidden",
            }}
          >
            <Image
              style={{ width: "100%", height: 200 }}
              source={require("../assets/budjet.jpg")}
            />
          </View>
          <View style={{ height: 200, flexDirection: "row" }}>
            <View
              style={{
                flex: 0.5,
                borderColor: colors.dark,
                borderWidth: 1,
                borderRadius: 20,
                margin: 4,
                marginLeft: 10,
                backgroundColor: colors.light,
                shadowColor: colors.dark,
                shadowOffset: { width: 10, height: 10 },
                shadowOpacity: 0.8,
                shadowRadius: 10,
                elevation: 10,
                overflow: "hidden",
              }}
            >
              <Image
                style={{ width: "100%", height: 200 }}
                source={require("../assets/baje.jpg")}
              />
            </View>
            <View
              style={{
                flex: 0.5,
                borderColor: colors.dark,
                borderWidth: 1,
                borderRadius: 20,
                margin: 4,
                marginRight: 10,
                backgroundColor: colors.light,
                shadowColor: colors.dark,
                shadowOffset: { width: 10, height: 10 },
                shadowOpacity: 0.8,
                shadowRadius: 10,
                elevation: 10,
                overflow: "hidden",
              }}
            >
              <Image
                style={{ width: "100%", height: 200 }}
                source={require("../assets/branches.jpg")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default MainScreen;
