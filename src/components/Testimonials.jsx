import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Text,
  Flex,
  Image,
  Heading,
  Grid,
} from "@chakra-ui/react";
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

const testimonialsData = [
  {
    company: "Starks Associate",
    text: "Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They've become more than a service provider; they're a trusted ally.",
    author: "John, Management",
    image: john,
    logo: starksLogo,
  },
  {
    company: "Executive Pros",
    text: "The team at Forcythe truly understands our needs and helped us scale to new heights. We couldn't have asked for better partners.",
    author: "ExecutivePro CEO",
    image: executiveProCeo,
    logo: ExecutiveProsLogo,
  },
  {
    company: "Stac.ai",
    text: "Our collaboration with Forcythe has been transformative, helping us innovate faster and deliver more value.",
    author: "Edwin, Founder",
    image: edwin,
    logo: stacaiLogo,
  },
  {
    company: "Iwaria",
    text: "Forcythe's dedication and expertise have made a significant difference in our journey. Highly recommended.",
    author: "Iwaria Founder",
    image: iwaria,
    logo: iwariaLogo,
  },
  {
    company: "Beaupreneur",
    text: "Exceptional service, exceptional results. Forcythe has been a game-changer for us.",
    author: "Christina, CEO",
    image: christina,
    logo: BeaupreneurLogo,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box bg="gray.900" color="white" py={10}>
      <Container maxW="7xl">
        {/* Heading */}
        <Heading
          textAlign="center"
          mb={6}
          fontSize={{ base: "3xl", md: "5xl" }}
        >
          Discover the{" "}
          <Text as="span" color="blue.300">
            transformative stories
          </Text>{" "}
          of startups that scaled new heights with us
        </Heading>

        {/* Logo Bar */}
        <Flex
          justifyContent="space-around"
          gap={6}
          mb={8}
          border={"1px solid blue"}
          rounded={"full"}
        >
          {testimonialsData.map((testimonial, index) => (
            <Box
              key={index}
              p={2}
              borderRadius="full"
              bg={index === activeIndex ? "blue.300" : "transparent"}
              transition="background-color 0.3s"
            >
              <Image
                src={testimonial.logo}
                boxSize={10}
                alt={`${testimonial.company} Logo`}
              />
            </Box>
          ))}
        </Flex>

        {/* Testimonial Content */}
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          alignItems="center"
          gap={8}
          mt={6}
          p={6}
          width={{ base: "auto", md: "50%" }}
          rounded={"30px"}
          bg="blue.300"
        >
          {/* Left: Text Content */}
          <Box>
            <Text fontWeight="bold" fontSize="xl" mb={2}>
              {testimonialsData[activeIndex].company}
            </Text>
            <Text fontSize="lg" mb={4}>
              {testimonialsData[activeIndex].text}
            </Text>
            <Text fontSize="md" fontStyle="italic">
              {testimonialsData[activeIndex].author}
            </Text>
          </Box>

          {/* Right: Image */}
          <Box>
            <Image
              src={testimonialsData[activeIndex].image}
              borderRadius="md"
              alt={testimonialsData[activeIndex].author}
              w="50%"
              // minH="80%"
              h={"auto"}
              objectFit="cover"
            />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
