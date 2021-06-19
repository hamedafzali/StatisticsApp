import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import Text from "../Text";

import defaultStyles from "../../config/styles";
function ListItem({
  title,
  subTitle,
  image,
  date,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={defaultStyles.colors.light}
        onPress={onPress}
      >
        <View style={styles.container}>
          <MaterialCommunityIcons
            color={defaultStyles.colors.medium}
            name="chevron-left"
            size={25}
          />

          <View style={styles.detailsContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            {subTitle && (
              <Text style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </Text>
            )}
            {date && (
              <Text style={styles.date} numberOfLines={2}>
                {date}
              </Text>
            )}
          </View>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: defaultStyles.colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginRight: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: defaultStyles.colors.dark,
    fontFamily: "Harmattan",
  },
  title: {
    fontWeight: "500",
    color: defaultStyles.colors.pbGreenColor,
    fontSize: 25,
    marginBottom: 5,
    fontFamily: "Harmattan",
  },
  date: {
    fontWeight: "200",
    color: defaultStyles.colors.pbRedColor,
    marginTop: 10,
    fontFamily: "Harmattan",
  },
});

export default ListItem;
