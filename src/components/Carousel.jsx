import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { Box, Image, Flex } from "@chakra-ui/react";
import Slider from "react-slick";
import activity from "../assets/Images/activity.svg";
import africaFund from "../assets/Images/africaFund.svg";
import execpro from "../assets/Images/exec-pro.svg";
import phone from "../assets/Images/phone.svg";
import stac from "../assets/Images/stac.svg";
import starks from "../assets/Images/starks.svg";

const Carousel = () => {
  const topSliderSettings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
  };

  const bottomSliderSettings = {
    ...topSliderSettings,
    rtl: true,
    speed: 4000,
  };
 
  const images = [activity, africaFund, execpro, phone, stac, starks];

  return (
    <Flex
      direction="column"
      height="auto"
      width="100%"
      position="relative"
      justify="space-between"
      py={8}
      bgColor={"black"}
    >
      {/* Top Slider */}
      <Box flex="1" mb={4}>
        <Slider {...topSliderSettings}>
          {images.map((image, index) => (
            <Box key={index} px={2}>
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                height="5xl"
                width="100%"
                objectFit="contain"
              />
            </Box>
          ))}
        </Slider>
      </Box>

      {/* Bottom Slider */}
      <Box flex="1">
        <Slider {...bottomSliderSettings}>
          {images.map((image, index) => (
            <Box key={index} px={2}>
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                height="150px"
                width="100%"
                objectFit="contain"
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Flex>
  );
};

export default Carousel;
