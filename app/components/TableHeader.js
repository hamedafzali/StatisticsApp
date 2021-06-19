import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function TableHeader({ data }) {
  return (
    <View style={styles.rowStyle}>
      {Object.keys(data[0]).map((colName) => (
        <Cell data={colName} />
      ))}
    </View>
  );
}
function Cell({ data }) {
  return (
    <View style={styles.cellStyle}>
      <Text style={styles.textbox}>{data}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  gridContainer: {
    width: "100%",
  },
  rowStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderColor: "grey",
  },
  cellStyle: {
    flex: 1,
    margin: 10,
  },
  textbox: {
    fontSize: 15,
  },
});
