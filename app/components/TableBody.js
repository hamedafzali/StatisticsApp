import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

function Row({ column }) {
  return (
    <View style={[styles.rowStyle]}>
      {Object.keys(column).map((colName) => (
        <Cell data={column[colName]} />
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
export default function TableBody({ data }) {
  return (
    <View style={styles.gridContainer}>
      {data.map((column, index) => (
        <Row column={column} />
      ))}
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
