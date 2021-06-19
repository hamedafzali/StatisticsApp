import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export const SLIDER_WIDTH = Dimensions.get("window").width - 20;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH - 10);

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <ScrollView>
        <View style={styles.container1}>
          <View style={styles.headerRow}>
            <View style={styles.headerFirst}>
              <MaterialCommunityIcons
                name="account"
                color={colors.dark}
                size={90}
              />
            </View>
            <View style={styles.headerSecond}>
              <Text style={[styles.Text, { color: colors.grey }]}>
                نام : {item.name}
              </Text>
              <Text style={[styles.Text, { color: colors.grey }]}>
                نام خانوادگی : {item.family}
              </Text>
              <Text style={[styles.Text, { color: colors.grey }]}>
                پست سازمانی : {item.post}
              </Text>
              <Text style={[styles.Text, { color: colors.grey }]}>
                محل خدمت : {item.location}
              </Text>
            </View>
          </View>
          <View
            style={{
              borderRadius: 20,
              borderColor: colors.silver,
              borderWidth: 1,
              margin: 10,
              //height: 400,
              backgroundColor: colors.light,
              padding: 5,
              //flexDirection: "row-reverse",
              flex: 0.7,
              width: ITEM_WIDTH - 50,
              //height: "20%",
              alignItems: "center",
            }}
          >
            <View
              style={{
                //flexDirection: "row-reverse",
                alignItems: "center",
                //height: 32,
              }}
            >
              <Text style={[styles.Text, { color: colors.dark }]}>
                مبلغ ثابت:
              </Text>
              <TextInput
                style={styles.input}
                //onChangeText={onChangeNumber}
                value={0}
                placeholder=" مبلغ ثابت 50%"
                keyboardType="numeric"
              />
            </View>
            <View
              style={{
                //flexDirection: "row-reverse",
                alignItems: "center",
                //height: 32,
              }}
            >
              <Text style={[styles.Text, { color: colors.dark }]}>
                مبلغ سهم رئیس شعبه:
              </Text>
              <TextInput
                style={styles.input}
                //onChangeText={onChangeNumber}
                value={0}
                placeholder=" مبلغ سهم رئیس شعبه 30%"
                keyboardType="numeric"
              />
            </View>
            <View
              style={{
                //flexDirection: "row-reverse",
                alignItems: "center",
                //height: 32,
              }}
            >
              <Text style={[styles.Text, { color: colors.dark }]}>
                مبلغ سهم مدیر:
              </Text>
              <TextInput
                style={styles.input}
                //onChangeText={onChangeNumber}
                value={0}
                placeholder=" مبلغ سهم مدیر استان 20%/ستاد 50%"
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={{ flex: 0.3 }}>
            <TouchableOpacity
              onPress={() =>
                alert("مبلغ " + item.name + " " + item.family + " ثبت شد")
              }
            >
              <View style={[styles.button]}>
                <Text style={styles.Text}>ثبت</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    height: "90%",

    marginTop: 20,
    borderRadius: 8,
    width: ITEM_WIDTH - 30,
    //paddingBottom: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    //overflow: "hidden",
  },
  container1: {
    alignItems: "center",
    //backgroundColor: "white",

    flex: 1,
    //marginTop: 20,
  },

  headerRow: {
    flexDirection: "row-reverse",
    marginTop: 20,
  },
  headerFirst: {
    flex: 0.3,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignContent: "center",
    borderRadius: ITEM_WIDTH / 3,
    borderWidth: 2,
    borderColor: colors.silver,
    overflow: "hidden",
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.8,
    //shadowRadius: 4.65,
    elevation: 7,
    zIndex: 99999,
  },
  headerSecond: { flex: 0.7 },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  button: {
    backgroundColor: colors.light,
    borderRadius: 10,
    borderColor: colors.pbGreenColor,
    borderWidth: 1,
    padding: 10,
    margin: 30,
    //elevation: 10,
    width: ITEM_WIDTH - 90,
    //margin: 10,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.8,
    // shadowRadius: 4,
    // elevation: 10,
  },
  Text: {
    marginBottom: 0,
    textAlign: "center",
    fontFamily: "Harmattan",
    fontSize: 20,
  },
  input: {
    backgroundColor: colors.white,
    height: 45,
    width: ITEM_WIDTH - 70,
    borderRadius: 20,
    margin: 10,
    borderColor: colors.silver,
    borderWidth: 1,
    fontSize: 18,
    paddingRight: 10,
    paddingLeft: 10,
  },
});

export default CarouselCardItem;
