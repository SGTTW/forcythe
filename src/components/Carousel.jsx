import React, { useState } from "react";
import { Box, Flex, keyframes, Image } from "@chakra-ui/react";
import activity from "../assets/Images/activity.svg";
import africaFund from "../assets/Images/africaFund.svg";
import execpro from "../assets/Images/exec-pro.svg";
import phone from "../assets/Images/phone.svg";
import stac from "../assets/Images/stac.svg";
import starks from "../assets/Images/starks.svg";

const moveLeftToRight = keyframes`
  from { transform: translateX(-16.67%); }
  to { transform: translateX(0%); }
`;

const moveRightToLeft = keyframes`
  from { transform: translateX(0%); }
  to { transform: translateX(-16.67%); }
`;

const Carousel = () => {
  const [items] = useState([
    activity,
    africaFund,
    execpro,
    phone,
    stac,
    starks,
  ]);
  const duplicatedItems = [...items, ...items];

  return (
    <Box mx="auto" overflow="hidden" position="relative" bg={"black"} py={8}>
      {/* Top Row - Moving Left to Right */}
      <Flex
        position="relative"
        width="600%"
        mb={8}
        sx={{
          animation: `${moveLeftToRight} 30s linear infinite`,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <Box
            key={`top-${index}`}
            width="300px"
            height="200px"
            mx={4}
            borderRadius="lg"
            flexShrink={0}
            overflow="hidden"
          >
            <Image
              src={item}
              alt={`Top Row Image ${index + 1}`}
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </Box>
        ))}
      </Flex>

      {/* Bottom Row - Moving Right to Left */}
      <Flex
        position="relative"
        width="600%"
        sx={{
          animation: `${moveRightToLeft} 30s linear infinite`,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <Box
            key={`bottom-${index}`}
            width="300px"
            height="200px"
            mx={4}
            borderRadius="lg"
            flexShrink={0}
            overflow="hidden"
          >
            <Image
              src={item}
              alt={`Bottom Row Image ${index + 1}`}
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Carousel;
