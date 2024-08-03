import React from "react";
import ReactCardSlider from "react-card-slider-component";
import { Carousel } from "@trendyol-js/react-carousel";

const slides = [
  {
    image: "https://picsum.photos/200/300",
    title: "This is a title",
    description: "This is a description",
    // clickEvent: sliderClick
  },
  {
    image: "https://picsum.photos/600/500",
    title: "This is a second title",
    description: "This is a second description",
    // clickEvent: sliderClick
  },
  {
    image: "https://picsum.photos/700/600",
    title: "This is a third title",
    description: "This is a third description",
    // clickEvent: sliderClick
  },
  {
    image: "https://picsum.photos/500/400",
    title: "This is a fourth title",
    description: "This is a fourth description"
    // clickEvent: sliderClick
  },
  {
    image: "https://picsum.photos/200/300",
    title: "This is a fifth title",
    description: "This is a fifth description"
    // clickEvent: sliderClick
  },
  {
    image: "https://picsum.photos/800/700",
    title: "This is a sixth title",
    description: "This is a sixth description"
    // clickEvent: sliderClick
  },
  {
    image: "https://picsum.photos/300/400",
    title: "This is a seventh title",
    description: "This is a seventh description"
    // clickEvent: sliderClick
  }
];
const Baz = () => {
  return (
    <div className=" flex justify-center items-center "  style={{ marginTop: "5em" }}>
      <ReactCardSlider slides={slides} />
    </div>
  );
};

export default Baz;