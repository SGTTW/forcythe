import React, { useEffect, useState } from "react";
import { Box, Flex, Heading, Text, Button, Container } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";
import { AiFillCaretRight } from "react-icons/ai";

import worldMap from "../assets/Images/worldMap.png";

const HeroSection = () => {
  const [showSubheading, setShowSubheading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSubheading(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      as="section"
      bg="#0B1120"
      color="white"
      py={{ base: 16, md: 24 }}
      position="relative"
      overflow="hidden"
      minHeight="auto"
    >
      <Container
        maxW="7xl"
        px={{ base: 4, md: 6 }}
        height="100%"
        position="relative"
        zIndex={1}
      >
        <Flex
          direction="column"
          align={{ base: "flex-start", md: "flex-start", lg: "flex-start" }}
          textAlign={{ base: "left", md: "left", lg: "left" }}
          justify="center"
          // bg="rgba(0, 0, 0, 0.6)"
          bg={"rgba(0, 0, 0, 0.5)"}
          borderRadius="30px"
          py={12}
          px={6}
          height="400px"
          mt={{ base: "9px", md: "initial" }}
        >
          {/* Main Heading */}
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="md"
            lineHeight="short"
            mb={4}
            minHeight="120px"
          >
            <Typewriter words={["We build  "]} cursor={false} typeSpeed={70} />
            <Text as="span" color="blue.400">
              <Typewriter
                words={[" products "]}
                cursor={false}
                typeSpeed={70}
              />
            </Text>

            <Typewriter
              words={[" that shape a better future"]}
              cursor={false}
              typeSpeed={70}
            />
          </Heading>

          {/* Subheading */}
          <Box minHeight="80px">
            {showSubheading && (
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.300"
                mb={6}
                maxW="2xl"
              >
                <Typewriter
                  words={[
                    "We're the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invoke sector-wide transformation.",
                  ]}
                  loop={1}
                  cursor={false}
                  typeSpeed={20}
                />
              </Text>
            )}
          </Box>
          {/* Book a Call Button */}
          <Button
            display={{ base: "flex", md: "flex" }}
            bg="white"
            color="black"
            rounded="full"
            px={6}
            py={5}
            fontSize="md"
            fontWeight="medium"
            _active={{ bg: "whiteAlpha.800" }}
            borderBottom={"1px dashed #333"}
            borderLeft={"1px dashed #333"}
            _hover={{ bg: "blue", color: "white", border: "none" }}
            rightIcon={<AiFillCaretRight />}
          >
            Book a Call
          </Button>
        </Flex>

        <Heading
          as="h6"
          fontWeight="bold"
          lineHeight="short"
     
          textAlign={{ base: "center", lg: "center" }}
          mt={{ base: "2rem", md: "5rem " }}
        >
          Success in{" "}
          <Text as="span" color="blue.400">
            Motion
          </Text>
          - Our Client's Journey
        </Heading>
      </Container>

      {/* Background with World Map */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgImage={`url(${worldMap})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        opacity={0.2}
        zIndex={0}
        height={"auto"}
      />
    </Box>
  );
};

export default HeroSection;
