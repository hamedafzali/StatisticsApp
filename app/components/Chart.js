import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View, TouchableOpacity } from "react-native";
import { Text as TextSvg } from "react-native-svg";
import {
  StackedAreaChart as StackedArea,
  BarChart as Bar,
  Grid,
  YAxis,
  XAxis,
  StackedBarChart as StackedBar,
  LineChart as Line,
  PieChart as Pie,
  ProgressCircle,
} from "react-native-svg-charts";
import * as shape from "d3-shape";
import * as scale from "d3-scale";
import colors from "../config/colors";
const Table = () => {
  return (
    <View>
      <Text>جدول</Text>
    </View>
  );
};
class StackedAreaChart extends React.PureComponent {
  render() {
    const data = [
      {
        month: new Date(2015, 0, 1),
        apples: 3840,
        bananas: 1920,
        cherries: 960,
        dates: 400,
      },
      {
        month: new Date(2015, 1, 1),
        apples: 1600,
        bananas: 1440,
        cherries: 960,
        dates: 400,
      },
      {
        month: new Date(2015, 2, 1),
        apples: 640,
        bananas: 960,
        cherries: 3640,
        dates: 400,
      },
      {
        month: new Date(2015, 3, 1),
        apples: 3320,
        bananas: 480,
        cherries: 640,
        dates: 400,
      },
    ];

    const colors = ["#8800cc", "#aa00ff", "#cc66ff", "#eeccff"];
    const keys = ["apples", "bananas", "cherries", "dates"];
    const svgs = [
      { onPress: () => console.log("apples") },
      { onPress: () => console.log("bananas") },
      { onPress: () => console.log("cherries") },
      { onPress: () => console.log("dates") },
    ];

    return (
      <StackedArea
        style={{ height: 200, paddingVertical: 16 }}
        data={data}
        keys={keys}
        colors={colors}
        curve={shape.curveNatural}
        showGrid={false}
        svgs={svgs}
      />
    );
  }
}
class BarChart extends React.PureComponent {
  render() {
    const fill = "rgb(134, 65, 244)";
    const data = [
      {
        value: 50,
        label: "01",
      },
      {
        value: 10,
        label: "02",
      },
      {
        value: 40,
        label: "03",
      },
      {
        value: 95,
        label: "04",
      },
      {
        value: 85,
        label: "05",
      },
      {
        value: 50,
        label: "06",
      },
      {
        value: 10,
        label: "07",
      },
      {
        value: 40,
        label: "08",
      },
      {
        value: 95,
        label: "09",
      },
      {
        value: 85,
        label: "10",
      },
      {
        value: 95,
        label: "11",
      },
      {
        value: 85,
        label: "12",
      },
    ];
    const CUT_OFF = 20;
    const Labels = ({ x, y, bandwidth, data }) =>
      data.map((value, index) => (
        <TextSvg
          key={index}
          x={x(index) + bandwidth / 2}
          y={value < CUT_OFF ? y(value) - 10 : y(value) + 15}
          fontSize={14}
          fill={value >= CUT_OFF ? "white" : "black"}
          alignmentBaseline={"middle"}
          textAnchor={"middle"}
        >
          {value}
        </TextSvg>
      ));
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            height: 300,
            paddingVertical: 16,
          }}
        >
          <YAxis
            style={{ marginLeft: 20 }}
            data={data}
            yAccessor={({ index }) => index}
            scale={scale.scaleBand}
            contentInset={{ top: 30, bottom: 30 }}
            spacing={0.2}
            formatLabel={(_, index) => data[index].label}
          />
          <Bar
            style={{ flex: 1, margin: 20 }}
            data={data}
            horizontal={true}
            yAccessor={({ item }) => item.value}
            svg={{ fill: "rgba(134, 65, 244, 0.8)" }}
            contentInset={{ top: 10, bottom: 10 }}
            spacing={0.2}
            gridMin={0}
          >
            <Grid direction={Grid.Direction.VERTICAL} />
            {/* <Labels /> */}
          </Bar>
        </View>
      </View>
    );
  }
}
class StackedBarChart extends React.PureComponent {
  render() {
    const data = [
      {
        month: new Date(2015, 0, 1),
        apples: 3840,
        bananas: 1920,
        cherries: 960,
        dates: 400,
        oranges: 400,
      },
      {
        month: new Date(2015, 1, 1),
        apples: 1600,
        bananas: 1440,
        cherries: 960,
        dates: 400,
      },
      {
        month: new Date(2015, 2, 1),
        apples: 640,
        bananas: 960,
        cherries: 3640,
        dates: 400,
      },
      {
        month: new Date(2015, 3, 1),
        apples: 3320,
        bananas: 480,
        cherries: 640,
        dates: 400,
      },
    ];

    const colors = ["#7b4173", "#a55194", "#ce6dbd", "#de9ed6"];
    const keys = ["apples", "bananas", "cherries", "dates"];

    return (
      <StackedBar
        style={{ height: 200 }}
        keys={keys}
        colors={colors}
        data={data}
        showGrid={false}
        contentInset={{ top: 30, bottom: 30 }}
      />
    );
  }
}
class LineChart extends React.PureComponent {
  render() {
    const data = [
      50,
      10,
      40,
      95,
      -4,
      -24,
      85,
      91,
      35,
      53,
      -53,
      24,
      50,
      -20,
      -80,
    ];

    return (
      <Line
        style={{ height: 200 }}
        data={data}
        svg={{ stroke: "rgb(134, 65, 244)" }}
        contentInset={{ top: 20, bottom: 20 }}
      >
        <Grid />
      </Line>
    );
  }
}
class PieChart extends React.PureComponent {
  render() {
    const data = [
      50,
      10,
      40,
      95,
      -4,
      -24,
      85,
      91,
      35,
      53,
      -53,
      24,
      50,
      -20,
      -80,
    ];

    const randomColor = () =>
      ("#" + ((Math.random() * 0xffffff) << 0).toString(16) + "000000").slice(
        0,
        7
      );

    const pieData = data
      .filter((value) => value > 0)
      .map((value, index) => ({
        value,
        svg: {
          fill: randomColor(),
          onPress: () => console.log("press", index),
        },
        key: `pie-${index}`,
      }));

    return <Pie style={{ height: "90%" }} data={pieData} />;
  }
}

class ProgressCircleChart extends React.PureComponent {
  render() {
    return (
      <ProgressCircle
        style={{ height: "90%" }}
        progress={0.7}
        lable={(i) => i}
        progressColor={"rgb(134, 65, 244)"}
      />
    );
  }
}
const ChartStyle = (props) => {
  return (
    <View
      style={{
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        borderRadius: 10,
        borderColor: colors.silver,
      }}
    >
      <View
        style={{
          //width: "100%",
          backgroundColor: colors.pbGreenColor,
          alignItems: "center",
          justifyContent: "center",
          shadowColor: colors.dark,
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 10,
          borderRadius: 10,
          padding: 10,
          marginLeft: 5,
          marginRight: 5,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            //fontWeight: "bold",
            color: colors.light,
            fontFamily: "Harmattan",
          }}
        >
          {props.title}
        </Text>
      </View>

      <View
        style={{
          //flexDirection: "row",
          height: 350,
          alignContent: "center",
          justifyContent: "center",
          marginLeft: 2,
          marginRight: 2,
          marginBottom: 10,
          shadowColor: colors.dark,
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 10,
          borderRadius: 10,
          padding: 10,
        }}
      >
        {props.children}
      </View>
    </View>
  );
};

const Chart = ({ title }) => {
  const [selectedChart, setSelectedChart] = useState("table");
  const Tab = createBottomTabNavigator();
  return (
    <ChartStyle title={title}>
      <View
        style={{ flexDirection: "column", flex: 1, justifyContent: "flex-end" }}
      >
        <View>
          {selectedChart === "chart-bar" ? (
            <BarChart title={title} />
          ) : selectedChart === "chart-bell-curve-cumulative" ? (
            <LineChart title={title} />
          ) : selectedChart === "chart-donut" ? (
            <ProgressCircleChart title={title} />
          ) : selectedChart === "chart-pie" ? (
            <PieChart title={title} />
          ) : selectedChart === "chart-histogram" ? (
            <StackedBarChart title={title} />
          ) : selectedChart === "table" ? (
            <Table />
          ) : (
            <StackedAreaChart title={title} />
          )}
        </View>
        <View
          style={{
            flexDirection: "row-reverse",
            alignItems: "stretch",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => setSelectedChart("table")}>
            <MaterialCommunityIcons
              name="table"
              style={{
                fontSize: 30,
                color:
                  selectedChart === "table" ? colors.pbRedColor : colors.grey,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedChart("chart-bar")}>
            <MaterialCommunityIcons
              name="chart-bar"
              style={{
                fontSize: 30,
                color:
                  selectedChart === "chart-bar"
                    ? colors.pbRedColor
                    : colors.grey,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedChart("chart-bell-curve-cumulative")}
          >
            <MaterialCommunityIcons
              name="chart-bell-curve-cumulative"
              style={{
                fontSize: 30,
                color:
                  selectedChart === "chart-bell-curve-cumulative"
                    ? colors.pbRedColor
                    : colors.grey,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedChart("chart-donut")}>
            <MaterialCommunityIcons
              name="chart-donut"
              style={{
                fontSize: 30,
                color:
                  selectedChart === "chart-donut"
                    ? colors.pbRedColor
                    : colors.grey,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedChart("chart-pie")}>
            <MaterialCommunityIcons
              name="chart-pie"
              style={{
                fontSize: 30,
                color:
                  selectedChart === "chart-pie"
                    ? colors.pbRedColor
                    : colors.grey,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedChart("chart-histogram")}>
            <MaterialCommunityIcons
              name="chart-histogram"
              style={{
                fontSize: 30,
                color:
                  selectedChart === "chart-histogram"
                    ? colors.pbRedColor
                    : colors.grey,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedChart("chart-areaspline")}
          >
            <MaterialCommunityIcons
              name="chart-areaspline"
              style={{
                fontSize: 30,
                color:
                  selectedChart === "chart-areaspline"
                    ? colors.pbRedColor
                    : colors.grey,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ChartStyle>
  );
};
export default Chart;
