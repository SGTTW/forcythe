import React, { useEffect, useState } from "react";
import { Box, Flex, Heading, Text, Button, Container } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";
import worldMap from "../assets/Images/worldMap.png";

const HeroSection = () => {
  // State to control when to start the second typewriter
  const [showSubheading, setShowSubheading] = useState(false);

  // Handle the completion of first typewriter
  const handleFirstTypewriterDone = () => {
    setShowSubheading(true);
    // setTimeout(() => setShowSubheading(true), 10);
  };

  useEffect(() => {
    if (showSubheading) {
      //
    }
  }, [showSubheading]);

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
      {/* Container to match Navbar width */}
      <Container
        maxW="7xl"
        px={{ base: 4, md: 6 }}
        height="100%"
        position="relative"
        zIndex={1}
      >
        {/* Main content wrapper */}
        <Flex
          direction="column"
          align={{ base: "flex-start", md: "flex-start", lg: "flex-start" }}
          textAlign={{ base: "left", md: "left", lg: "left" }}
          justify="center"
          bg="rgba(0, 0, 0, 0.6)"
         
          borderRadius="lg"
          py={12}
          px={6}
          height="400px" // Fixed height for content area
        >
          {/* Main Heading */}
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            lineHeight="short"
            mb={4}
            minHeight="120px" // Fixed height for heading
          >
            <Typewriter words={["We build "]} cursor={false} typeSpeed={70} />
            <Text as="span" color="blue.400">
              <Typewriter words={["products"]} cursor={false} typeSpeed={70} />
            </Text>
            <Typewriter
              words={[" that shape a better future"]}
              cursor={false}
              typeSpeed={70}
              onLoopDone={handleFirstTypewriterDone}
            />
          </Heading>

          {/* Subheading */}
          <Box minHeight="80px">
            {" "}
            {/* Fixed height for subheading */}
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

          {/* Button */}
          <Box minHeight="60px">
            {" "}
            {/* Fixed height for button area */}
            <Button
              bg="white"
              color="black"
              fontSize="md"
              fontWeight="bold"
              px={6}
              py={4}
              rounded="full"
              _active={{ bg: "whiteAlpha.800" }}
              borderBottom="1px dashed #333"
              borderLeft="1px dashed #333"
              _hover={{ bg: "blue", color: "white", border: "none" }}
            >
              Book a Call
            </Button>
          </Box>
        </Flex>

        {/* Success in Motion heading */}
        <Heading
          as="h6"
          // fontSize={{ base: "3px", md: "5px" }}
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
