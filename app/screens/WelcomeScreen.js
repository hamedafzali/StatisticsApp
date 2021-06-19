import React from "react";
import { StyleSheet, ImageBackground, View, Image, Text } from "react-native";
import colors from "../config/colors";
import { useFonts } from "@use-expo/font";

import Button from "../components/Button";
import Screen from "./../components/Screen";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  // const [isLoaded] = useFonts({
  //   BHoma: require("../assets/fonts/BHoma.ttf"),
  //   //IranNastaliq: require("../assets/fonts/IranNastaliq.ttf"),
  // });
  //if (!isLoaded) return false;
  const [loaded] = useFonts({
    IranNastaliq: require("../assets/fonts/IranNastaliq.ttf"),
    Harmattan: require("../assets/fonts/Harmattan-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Screen>
      <ImageBackground
        style={styles.background}
        source={require("../assets/mainBuilding.jpg")}
        blurRadius={2}
      >
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <Text style={styles.logoTitle1}> پست بانک ایران</Text>
          <Text style={styles.logoTitle2}>سامانه آمار و بودجه</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="ورود"
            onPress={() => navigation.navigate(routes.LOGIN)}
            color="grey"
          />
          {/* <Button
            title="کاربر میهمان"
            onPress={() => navigation.navigate(routes.LOGIN)}
          /> */}
        </View>
      </ImageBackground>
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logoContainer: {
    position: "absolute",
    top: 80,
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  buttonContainer: { padding: 20, width: "100%" },
  logoTitle1: {
    fontSize: 60,
    color: colors.pbRedColor,
    marginTop: 20,
    //fontWeight: "bold",
    fontFamily: "IranNastaliq",
  },
  logoTitle2: {
    fontSize: 50,
    //fontWeight: "bold",
    color: colors.white,
    marginTop: 0,
    fontFamily: "Harmattan",
  },
});
export default WelcomeScreen;
