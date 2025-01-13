import React from "react";
import { Box, Flex, Heading, Text, Icon, VStack } from "@chakra-ui/react";
import { FiLayers } from "react-icons/fi";

const B2B = () => {
  return (
    <Box bg="gray.900" py={12} px={4}>
      {/* Header */}
      <Heading
        textAlign="center"
        color="white"
        fontSize={{ base: "2xl", md: "3xl" }}
        mb={8}
      >
        Your best call for B2B/B2C product innovation
      </Heading>

      {/* Cards */}
      <Flex
        justify="center"
        align="center"
        direction={{ base: "column", md: "row" }}
        gap={6}
        wrap="wrap"
      >
        <Box
          bg="gray.800"
          color="white"
          p={6}
          rounded="lg"
          shadow="lg"
          w={{ base: "100%", md: "30%" }}
          _hover={{ bg: "blue.600", transform: "scale(1.05)" }}
          transition="all 0.3s ease"
        >
          <VStack spacing={4} align="start">
            <Icon as={FiLayers} boxSize={10} color="blue.400" />
            <Heading fontSize="lg" fontWeight="bold">
              Experience
            </Heading>
            <Text fontSize="sm" color="gray.300">
              Decades of collective wisdom. Leverage our extensive experience to
              avoid common pitfalls and accelerate your business growth.
            </Text>
          </VStack>
        </Box>

        <Box
          bg="gray.800"
          color="white"
          p={6}
          rounded="lg"
          shadow="lg"
          w={{ base: "100%", md: "30%" }}
          _hover={{ bg: "blue.600", transform: "scale(1.05)" }}
          transition="all 0.3s ease"
        >
          <VStack spacing={4} align="start">
            <Icon as={FiLayers} boxSize={10} color="blue.400" />
            <Heading fontSize="lg" fontWeight="bold">
              Quick Support
            </Heading>
            <Text fontSize="sm" color="gray.300">
              We are your reliable partner, always there when you need us,
              ensuring smooth operations at every stage of your growth.
            </Text>
          </VStack>
        </Box>

        <Box
          bg="gray.800"
          color="white"
          p={6}
          rounded="lg"
          shadow="lg"
          w={{ base: "100%", md: "30%" }}
          _hover={{ bg: "blue.600", transform: "scale(1.05)" }}
          transition="all 0.3s ease"
        >
          <VStack spacing={4} align="start">
            <Icon as={FiLayers} boxSize={10} color="blue.400" />
            <Heading fontSize="lg" fontWeight="bold">
              Cost Savings
            </Heading>
            <Text fontSize="sm" color="gray.300">
              Maximising impact, minimising costs efficiency is key. We provide
              cost-effective solutions without compromising on quality.
            </Text>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default B2B;
