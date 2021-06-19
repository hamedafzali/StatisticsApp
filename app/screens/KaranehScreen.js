import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import CarouselCards from "../components/CarouselCards";

import Screen from "../components/Screen";
import colors from "../config/colors";
import KaranehRow from "./../components/KaranehRow";

const KaranehScreen = () => {
  data = [
    {
      location: "اداره کل آمار و بودجه",
      name: "احسان",
      family: "امیری",
      post: "معاون",
      A50: 5560000,
      A30: 0,
      A20: 0,
    },
    {
      location: "اداره کل آمار و بودجه",
      name: "حامد",
      family: "افضلی نژاد",
      post: "کارشناس مسئول",
      A50: 5220000,
      A30: 0,
      A20: 0,
    },
    {
      location: "اداره کل آمار و بودجه",
      name: "فاطمه",
      family: "نصیری زند",
      post: "کارشناس",
      A50: 3252253,
      A30: 0,
      A20: 0,
    },
    {
      location: "اداره کل آمار و بودجه",
      name: "آتنا",
      family: "کاظم زاده",
      post: "کارشناس",
      A50: 3446662,
      A30: 0,
      A20: 0,
    },
    {
      location: "اداره کل آمار و بودجه",
      name: "مجید",
      family: "محمدی پور",
      post: "کارشناس",
      A50: 4563332,
      A30: 0,
      A20: 0,
    },
    {
      location: "اداره کل آمار و بودجه",
      name: "علی",
      family: "جمال لیوانی",
      post: "کارشناس مسئول",
      A50: 8524442,
      A30: 0,
      A20: 0,
    },
  ];
  // data = [
  //   {
  //     title: "Aenean leo",
  //     body:
  //       "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
  //     imgUrl: "https://picsum.photos/id/11/200/300",
  //   },
  //   {
  //     title: "In turpis",
  //     body:
  //       "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
  //     imgUrl: "https://picsum.photos/id/10/200/300",
  //   },
  //   {
  //     title: "Lorem Ipsum",
  //     body:
  //       "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
  //     imgUrl: "https://picsum.photos/id/12/200/300",
  //   },
  //   {
  //     title: "Aenean leo",
  //     body:
  //       "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
  //     imgUrl: "https://picsum.photos/id/11/200/300",
  //   },
  //   {
  //     title: "In turpis",
  //     body:
  //       "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
  //     imgUrl: "https://picsum.photos/id/10/200/300",
  //   },
  //   {
  //     title: "Lorem Ipsum",
  //     body:
  //       "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
  //     imgUrl: "https://picsum.photos/id/12/200/300",
  //   },
  // ];
  return (
    <Screen>
      <View style={styles.container}>
        <CarouselCards data={data} />
        {/* <View
        style={{
          width: "100%",
          height: 60,
          backgroundColor: colors.grey,
          borderRadius: 20,
          shadowColor: colors.dark,
          shadowOffset: { width: 10, height: 10 },
          shadowOpacity: 1,
          shadowRadius: 10,
          elevation: 10,
          alignItems: "center",
          justifyContent: "center",
          borderColor: colors.dark,
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            fontFamily: "Harmattan",
            fontSize: 30,
            color: colors.light,
          }}
        >
          طرح پایش و پویش فروردین 1400
        </Text>
      </View>
      <ScrollView>
        {data.map((row) => (
          <KaranehRow key={row.family} data={row} />
        ))}
      </ScrollView> */}
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,

    flex: 1,
    //marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignContent: "center",
  },
  image: {
    height: 300,
  },
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
});

export default KaranehScreen;
