 
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import activity from "../assets/Images/activity.svg";
// import africaFund from "../assets/Images/africaFund.svg";
// import execpro from "../assets/Images/exec-pro.svg";
// import phone from "../assets/Images/phone.svg";
// import stac from "../assets/Images/stac.svg";
// import starks from "../assets/Images/starks.svg";

// const Carousel = () => {
//   const images = [activity, africaFund, execpro, phone, stac, starks];

//   const topSliderSettings = {
//     infinite: true,
//     speed: 3000, // Slower speed
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 0,
//     cssEase: "linear",
//     arrows: false,
//     pauseOnHover: false,
//   };

//   const bottomSliderSettings = {
//     ...topSliderSettings,
//     rtl: true,
//     speed: 4000, // Even slower speed for bottom slider
//   };

//   return (
//     <div className="w-full h-[400px] flex flex-col justify-between">
//       {/* Container for top slider */}
//       <div className="h-[45%]">
//         <Slider {...topSliderSettings}>
//           {images.map((image, index) => (
//             <div key={`top-${index}`} className="px-2">
//               <img
//                 src={image}
//                 alt={`Image ${index + 1}`}
//                 className="h-[150px] w-full object-contain"
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>

//       {/* Container for bottom slider */}
//       <div className="h-[45%]">
//         <Slider {...bottomSliderSettings}>
//           {images.map((image, index) => (
//             <div key={`bottom-${index}`} className="px-2">
//               <img
//                 src={image}
//                 alt={`Image ${index + 1}`}
//                 className="h-[150px] w-full object-contain"
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Carousel;


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
    speed: 3000,  // Slower speed for smoother animation
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,  // Remove navigation arrows
    pauseOnHover: false,  // Prevent pausing on hover
  };

  const bottomSliderSettings = {
    ...topSliderSettings,
    rtl: true,
    speed: 4000,  // Even slower speed for bottom slider
  };

  // Array of images for reuse
  const images = [activity, africaFund, execpro, phone, stac, starks];

  return (
    <Flex 
      direction="column" 
      height="400px" 
      width="100%" 
      position="relative"
      justify="space-between"
      py={8}  // Add padding top and bottom
      bgColor={"black"}
    >
      {/* Top Slider */}
      <Box flex="1" mb={4}>  
        <Slider {...topSliderSettings}>
          {images.map((image, index) => (
            <Box key={index} px={2}>  {/* Add padding between slides */}
              <Image 
                src={image} 
                alt={`Image ${index + 1}`}
                height="150px"  // Fixed height for all images
                width="100%"
                objectFit="contain"  // Maintain aspect ratio
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