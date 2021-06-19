import React from "react";
import { View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
//import data from './data'

const CarouselCards = (props) => {
  const isCarousel = React.useRef(null);
  const { data } = props;

  return (
    // <Carousel
    //   layout={"stack"}
    //   layoutCardOffset={`18`}
    //   ref={isCarousel}
    //   data={data}
    //   renderItem={CarouselCardItem}
    //   sliderWidth={SLIDER_WIDTH}
    //   itemWidth={ITEM_WIDTH}
    //   inactiveSlideShift={0}
    //   useScrollView={true}
    // />
    <>
      <Carousel
        layout={"stack"}
        sliderWidth={SLIDER_WIDTH}
        sliderHeight={SLIDER_WIDTH}
        itemWidth={SLIDER_WIDTH - 60}
        data={data}
        renderItem={CarouselCardItem}
        hasParallaxImages={true}
      />
    </>
  );
};

export default CarouselCards;
