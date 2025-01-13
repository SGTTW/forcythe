import React, { useState, useEffect } from "react";
import { Box, Container, Text, Stack, Flex, Heading } from "@chakra-ui/react";

const CountingNumber = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.min(Math.floor(progress * endValue), endValue));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [endValue, duration]);

  return <>{count}</>;
};

const Stats = () => {
  const stats = [
    { number: 50, label: "Clients", suffix: "+" },
    { number: 120, label: "Projects", suffix: "+" },
    { number: 10, label: "Team Leads", suffix: "+" },
    { number: 10, label: "Glorious Years", suffix: "+" },
  ];

  return (
    <Box
      bg="#0B1120"
      color="white"
      position="relative"
      overflow="hidden"
      minH="100vh"
      display="flex"
      alignItems="center"
    >
      {/* Half Circle Container */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        width="150vh"
        height="150vh"
        borderRadius="50%"
        border="1px solid rgba(255, 255, 255, 0.1)"
        borderBottom="none"
        _before={{
          content: '""',
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          borderRadius: "50%",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          margin: "-10px",
        }}
      />

      {/* Content Container */}
      <Container maxW="7xl" position="relative" zIndex={1}>
        <Stack spacing={12} textAlign="center" my={20}>
          {/* Heading Section */}
          <Box>
            <Heading
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="semibold"
              lineHeight="1.4"
            >
              We build solutions that help{" "}
              <Text as="span" color="blue.400">
                businesses
              </Text>{" "}
              of all sizes to{" "}
              <Text as="span" color="blue.400">
                scale
              </Text>
            </Heading>
          </Box>

          {/* Stats Grid */}
          <Flex
            justify="center"
            align="center"
            gap={{ base: 4, md: 8 }}
            flexWrap="wrap"
            mt={8}
            display={{ base: "flex", md: "flex" }}
          >
            {stats.map((stat, index) => (
              <Stack
                key={index}
                spacing={2}
                textAlign="center"
                minW={{ base: "10px", md: "120px" }}
              >
                <Text
                  fontSize={{ base: "4xl", md: "5xl" }}
                  fontWeight="bold"
                  color="blue.400"
                  lineHeight="1"
                >
                  <CountingNumber endValue={stat.number} />
                  {stat.suffix}
                </Text>
                <Text fontSize={{ base: "sm", md: "md" }} color="gray.400">
                  {stat.label}
                </Text>
              </Stack>
            ))}
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default Stats;
