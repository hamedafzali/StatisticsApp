import React from "react";
import { StackedAreaChart } from "react-native-svg-charts";
import {
  BarChart,
  Grid,
  StackedBarChart,
  LineChart,
  PieChart,
  ProgressCircle,
} from "react-native-svg-charts";
import * as shape from "d3-shape";

export default class ChartTest extends React.PureComponent {
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
      <StackedAreaChart
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
export class BarChartExample extends React.PureComponent {
  render() {
    const fill = "rgb(134, 65, 244)";
    const data = [
      50,
      10,
      40,
      95,
      -4,
      -24,
      null,
      85,
      undefined,
      0,
      35,
      53,
      -53,
      24,
      50,
      -20,
      -80,
    ];

    return (
      <BarChart
        style={{ height: 200 }}
        data={data}
        svg={{ fill }}
        contentInset={{ top: 30, bottom: 30 }}
      >
        <Grid />
      </BarChart>
    );
  }
}
export class StackedBarChartExample extends React.PureComponent {
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
      <StackedBarChart
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
export class LineChartExample extends React.PureComponent {
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
      <LineChart
        style={{ height: 200 }}
        data={data}
        svg={{ stroke: "rgb(134, 65, 244)" }}
        contentInset={{ top: 20, bottom: 20 }}
      >
        <Grid />
      </LineChart>
    );
  }
}
export class PieChartExample extends React.PureComponent {
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

    return <PieChart style={{ height: 200 }} data={pieData} />;
  }
}

export class ProgressCircleExample extends React.PureComponent {
  render() {
    return (
      <ProgressCircle
        style={{ height: 100 }}
        progress={0.7}
        lable={(i) => i}
        progressColor={"rgb(134, 65, 244)"}
      />
    );
  }
}
