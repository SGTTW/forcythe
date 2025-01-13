import React, { useEffect, useState } from "react";
import { Box, Flex, Heading, Text, Button, Container } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";
import worldMap from "../assets/Images/worldMap.png";

const HeroSection = () => {
  const [showSubheading, setShowSubheading] = useState(false);

  // Calculate total time for the first typewriter sequence
  // "We build " (9 chars) + "products" (8 chars) + " that shape a better future" (26 chars)
  // Total 43 chars * (1000/70) ms per char ≈ 614ms for typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSubheading(true);
    }, 1000); // Set to slightly longer than typing time to ensure main heading is visible

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
      minHeight="100vh"
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
          bg="rgba(0, 0, 0, 0.6)"
          borderRadius="lg"
          py={12}
          px={6}
          height="400px"
        >
          {/* Main Heading */}
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            lineHeight="short"
            mb={4}
            minHeight="120px"
          >
            <Typewriter words={["We build "]} cursor={false} typeSpeed={70} />
            <Text as="span" color="blue.400">
              <Typewriter words={["products"]} cursor={false} typeSpeed={70} />
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

          {/* Rest of your code remains the same */}
          {/* Button and Success in Motion sections... */}
        </Flex>

        <Heading
          as="h6"
          fontWeight="bold"
          lineHeight="short"
          my={4}
          textAlign={{ base: "center", lg: "center" }}
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
      />
    </Box>
  );
};

export default HeroSection;
