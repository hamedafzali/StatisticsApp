import React, { Component } from "react";
import {
  Animated,
  View,
  FlatList,
  Text,
  Dimensions,
  StyleSheet,
} from "react-native";
import defaultStyles from "../config/styles";
import { ListItem, ListItemSeparator } from "../components/lists";
import Icon from "../components/Icon";
import routes from "../navigation/routes";
import colors from "../config/colors";
import Screen from "../components/Screen";
const { height, width } = Dimensions.get("window");

export default class ScrollSwagger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }
  // renderRow(rowData) {
  //   return (
  //     <View
  //       style={{
  //         width: width,
  //         height: 60,
  //         borderWidth: 1,
  //         marginVertical: 10,
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <Text>{rowData}</Text>
  //     </View>
  //   );
  // }
  render() {
    var headMov = this.state.scrollY.interpolate({
      inputRange: [0, 180, 181],
      outputRange: [0, -140, -140],
    });
    var hamovY = this.state.scrollY.interpolate({
      inputRange: [0, 180, 181],
      outputRange: [0, -20, -20],
    });
    var hamovX = this.state.scrollY.interpolate({
      inputRange: [0, 180, 181],
      outputRange: [0, -120, -120],
    });
    var imgOp = this.state.scrollY.interpolate({
      inputRange: [0, 180, 181],
      outputRange: [1, 0, 0],
    });
    // var misMovY = this.state.scrollY.interpolate({
    //   inputRange: [0, 180, 181],
    //   outputRange: [-50, 50, 50],
    // });
    var headColor = this.state.scrollY.interpolate({
      inputRange: [0, 400],
      outputRange: [
        defaultStyles.colors.pbGreenColor,
        defaultStyles.colors.pbRedColor,
      ],
    });
    var harot = this.state.scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: ["0deg", "360deg"],
    });

    const { Title, Chart } = this.props;
    return (
      <Screen>
        <View
          style={{
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <FlatList
            data={this.props.data}
            style={{ padding: 5, margin: 5 }}
            keyExtractor={(menuItem) => menuItem.title}
            ItemSeparatorComponent={ListItemSeparator}
            renderScrollComponent={this.renderScroll.bind(this)}
            renderItem={({ item }) => (
              <View
                style={{
                  height: 180,
                  //backgroundColor: defaultStyles.colors.light,
                  marginTop: 10,
                  alignItems: "flex-end",
                  marginBottom: 0,
                }}
              >
                <View
                  style={{
                    width: 120,
                    height: 50,
                    borderRadius: 40,
                    backgroundColor: defaultStyles.colors.light,
                    //borderColor: defaultStyles.colors.success,
                    //borderWidth: 1,
                    marginTop: -18,
                    position: "absolute",
                    zIndex: 999999,
                    alignItems: "center",
                    justifyContent: "center",
                    // shadowColor: defaultStyles.colors.light,
                    // shadowOffset: { width: 0, height: 1 },
                    // shadowOpacity: 0.2,
                    // shadowRadius: 20,
                    elevation: 11,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 25,
                      //fontWeight: "800",
                      color: defaultStyles.colors.danger,
                      fontFamily: "Harmattan",
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
                <View
                  style={{
                    //height: 300,
                    width: width - 33,
                    margin: 10,
                    backgroundColor: defaultStyles.colors.light,
                    borderRadius: 10,
                    //borderWidth: 1,
                    //borderColor: defaultStyles.colors.silver,
                    alignContent: "center",
                    justifyContent: "center",
                    shadowColor: defaultStyles.colors.dark,
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    elevation: 10,
                    flex: 1,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 22,
                      marginRight: 120,
                      alignItems: "stretch",
                      //justifyContent: "flex-start",
                      flex: 1,
                      fontFamily: "Harmattan",
                    }}
                  >
                    منابع: 335,666,444 ریال{"\n"}
                    مصارف: 335,666,444 ریال
                  </Text>
                </View>
                <View
                  style={{
                    height: 50,
                    width: 250,
                    margin: 20,
                    padding: 15,
                    backgroundColor: defaultStyles.colors.pbGreenColor,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: defaultStyles.colors.silver,
                    alignContent: "center",
                    justifyContent: "center",
                    marginTop: -30,
                    shadowColor: defaultStyles.colors.dark,
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    elevation: 15,
                    zIndex: 99999,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      marginRight: 10,
                      color: defaultStyles.colors.light,
                      fontFamily: "Harmattan",
                    }}
                  >
                    جمع کل: 225,666,452
                  </Text>
                </View>
              </View>
              // <ListItem
              //   title={item.title}
              //   IconComponent={
              //     <Icon
              //       name={item.icon.name}
              //       backgroundColor={item.icon.backgroundColor}
              //     />
              //   }
              //   onPress={() => navigation.navigate(item.targetScreen)}
              // />
            )}
          />
          {/* <Animated.View
            style={{
              top: -height + 100,
              zIndex: 2,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "yellow",
              width: 100,
              alignSelf: "center",
              transform: [
                { translateY: hamovY },
                //{ translateX: hamovX },
                { rotate: harot },
              ],
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "red" }}>
              Hahaha
            </Text>
          </Animated.View> */}
          {/* <Animated.View
            style={{
              top: -height + 100,
              zIndex: 2,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "yellow",
              width: 100,
              alignSelf: "center",
              transform: [
                { translateY: hamovY },
                //{ translateX: hamovX },
                { rotate: harot },
              ],
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "red" }}>
              Hahaha
            </Text>
          </Animated.View> */}
          <Animated.View
            style={{
              position: "absolute",
              height: 160,
              width: width,
              top: 0,

              backgroundColor: headColor,
              justifyContent: "flex-end",
              flexDirection: "column",
              //alignContent: "center",
              //justifyContent: "center",
              alignItems: "flex-end",
              transform: [{ translateY: headMov }],
              borderRadius: 10,
              borderWidth: 1,
            }}
          >
            <Text
              style={{ fontSize: 40, color: "white", fontFamily: "Harmattan" }}
            >
              گزارشات منابع و مصارف
            </Text>
            {/* <Animated.Image
              source={require("../assets/chart.png")}
              style={{ bottom: 0, width: width, height: 180, opacity: imgOp }}
            /> */}
          </Animated.View>
        </View>
      </Screen>
    );
  }
  _handleScroll(e) {
    //console.log(e.nativeEvent.contentOffset.y, "jvjhvhm");
  }

  renderScroll(props) {
    return (
      <Animated.ScrollView
        {...props}
        scrollEventThrottle={160}
        contentContainerStyle={{
          paddingTop: 160,
        }}
        // Declarative API for animations ->
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { y: this.state.scrollY } },
            },
          ],
          { listener: this._handleScroll.bind(this) },
          {
            useNativeDriver: true, // <- Native Driver used for animated events
          }
        )}
      />
    );
  }
}
