import React from "react";
import { Box, Container, Text, Flex, Image, Heading } from "@chakra-ui/react";

// Import your logo images
import john from "../assets/Images/john.svg";
import executiveProCeo from "../assets/Images/executive-pro-ceo.svg";
import edwin from "../assets/Images/edwin.svg";
import iwaria from "../assets/Images/iwaria-founder.svg";
import christina from "../assets/Images/christina.svg";
import starksLogo from "../assets/Images/starksLogo.svg";
import ExecutiveProsLogo from "../assets/Images/ExecutiveProsLogo.svg";
import stacaiLogo from "../assets/Images/stacaiLogo.svg";
import iwariaLogo from "../assets/Images/iwariaLogo.svg";
import BeaupreneurLogo from "../assets/Images/BeaupreneurLogo.svg";

const Testimonials = () => {
  const testimonial = {
    company: "Starks Associate",
    text: "Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They've become more than a service provider; they're a trusted ally.",
    author: "John, Management",
    image: "john",
  };

  return (
    <Box bg="#0B1120" color="white" py={16}>
      <Container maxW="7xl" px={{ base: 4, md: 6 }}>
        {/* Heading Section */}
        <Box textAlign="center" mb={12}>
          <Heading
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold"
            mb={4}
          >
            Discover the{" "}
            <Text as="span" color="blue.400">
              transformative stories
            </Text>{" "}
            of
          </Heading>
          <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
            startups that scaled new heights with us
          </Heading>
        </Box>

        {/* Logo Bar */}
        <Flex
          justify="space-between"
          align="center"
          mb={8}
          bg="rgba(255, 255, 255, 0.05)"
          p={4}
          borderRadius="full"
          overflow="hidden"
        >
          {[
            starksLogo,
            ExecutiveProsLogo,
            stacaiLogo,
            iwariaLogo,
            BeaupreneurLogo,
          ].map((logo, index) => (
            <Box
              key={index}
              mx={2}
              flex="1"
              display="flex"
              justifyContent="center"
            >
              <Image
                src={logo}
                alt={`Partner logo ${index + 1}`}
                height="30px"
                objectFit="contain"
              />
            
            </Box>
          ))}
        </Flex>

        {/* Testimonial Card */}
        <Flex
          bg="rgba(255, 255, 255, 0.05)"
          borderRadius="xl"
          overflow="hidden"
          direction={{ base: "column", md: "row" }}
          maxW="4xl"
          mx="auto"
        >
          {/* Text Content */}
          <Box p={8} flex="1" bg="rgba(0, 0, 0, 0.3)">
            <Text fontSize="lg" fontWeight="medium" mb={6} color="gray.300">
              {testimonial.text}
            </Text>
            <Box>
              <Text fontWeight="bold">{testimonial.company}</Text>
              <Text fontSize="sm" color="gray.400">
                {testimonial.author}
              </Text>
            </Box>
          </Box>

          {/* Image */}
          <Box flex="1" maxW={{ base: "100%", md: "50%" }}>
            <Image
              src={john}
              alt="Testimonial author"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Testimonials;
