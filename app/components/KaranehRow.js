import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import colors from "../config/colors";
const styles = StyleSheet.create({
  input: {
    height: 30,
    margin: 12,
    borderWidth: 1,
    width: 180,
    borderRadius: 10,
    borderColor: colors.pbRedColor,
    backgroundColor: colors.light,
    textAlign: "center",
  },
  button: {
    backgroundColor: colors.light,
    borderRadius: 10,
    borderColor: colors.pbGreenColor,
    borderWidth: 1,
    padding: 5,
    elevation: 2,
    width: 100,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 10,
  },

  Text: {
    marginBottom: 0,
    textAlign: "center",
    fontFamily: "Harmattan",
    fontSize: 15,
  },
});

const KaranehRow = ({ data }) => {
  return (
    <View
      style={{
        borderRadius: 20,
        borderColor: colors.pbRedColor,
        borderWidth: 1,
        margin: 10,
        height: 200,
        backgroundColor: colors.silver,
        shadowColor: colors.dark,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          margin: 10,
          padding: 5,
          backgroundColor: colors.pbGreenColor,
          borderColor: colors.pbRedColor,
          borderRadius: 10,
          borderWidth: 1,
          shadowColor: colors.dark,
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 10,
          flexDirection: "row-reverse",
        }}
      >
        <Text style={{ fontSize: 20, color: colors.light }}>
          {data.name + " " + data.family}
        </Text>
        <Text style={{ fontSize: 20, color: colors.light }}>{data.post}</Text>
      </View>
      <View
        style={{
          flexDirection: "row-reverse",
          alignItems: "center",
          height: 32,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: colors.dark,
            marginRight: 10,
            width: 150,
          }}
        >
          مبلغ ثابت:
        </Text>
        <TextInput
          style={styles.input}
          //onChangeText={onChangeNumber}
          value={data.A50.toString()}
          placeholder=" مبلغ ثابت 50%"
          keyboardType="numeric"
        />
      </View>
      <View
        style={{
          flexDirection: "row-reverse",
          alignItems: "center",
          height: 32,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: colors.dark,
            marginRight: 10,
            width: 150,
          }}
        >
          مبلغ سهم رئیس شعبه:
        </Text>
        <TextInput
          style={styles.input}
          //onChangeText={onChangeNumber}
          value={data.A30.toString()}
          placeholder=" مبلغ سهم رئیس شعبه 30%"
          keyboardType="numeric"
        />
      </View>
      <View
        style={{
          flexDirection: "row-reverse",
          alignItems: "center",
          height: 32,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: colors.dark,
            marginRight: 10,
            width: 150,
          }}
        >
          مبلغ سهم مدیر:
        </Text>
        <TextInput
          style={styles.input}
          //onChangeText={onChangeNumber}
          value={data.A20.toString()}
          placeholder=" مبلغ سهم مدیر استان 20%/ستاد 50%"
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity onPress={() => alert(data.name + " " + data.family)}>
        <View style={[styles.button]}>
          <Text style={styles.Text}>ثبت</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default KaranehRow;
