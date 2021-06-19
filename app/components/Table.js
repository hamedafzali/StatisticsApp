import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import TableHeader from "../components/TableHeader";
import TableBody from "../components/TableBody";
const KaranehScreen = ({ data }) => {
  return (
    <Screen>
      <ScrollView>
        <View style={styles.gridContainer}>
          <TableHeader data={data} />
          <TableBody data={data} />
        </View>
      </ScrollView>
    </Screen>
  );
};

export default KaranehScreen;
const styles = StyleSheet.create({
  gridContainer: {
    width: "100%",
  },
});
