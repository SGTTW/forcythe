import React from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Button,
  Image,
  VStack,
  HStack,
} from "@chakra-ui/react";
import ai from "../assets/Images/ai.webp";
import crypto from "../assets/Images/crypto.webp";
import crytpoAsset from "../assets/Images/crypto-asset.webp";
import logo from "../assets/Images/forcythe logo.svg";

const BlogCard = ({ title, date, author, category, image }) => (
  <Box>
    <Box position="relative" mb={4}>
      <Image
        src={image}
        alt={title}
        w="full"
        h="200px"
        objectFit="cover"
        borderRadius="lg"
      />
    </Box>
    <VStack align="flex-start" spacing={2}>
      <HStack spacing={2}>
        <Text color="gray.400" fontSize="sm">
          {category}
        </Text>
        <Text color="gray.400" fontSize="sm">
          •
        </Text>
        <Text color="gray.400" fontSize="sm">
          {date}
        </Text>
      </HStack>
      <Heading size="md" color="white">
        {title}
      </Heading>
      <Text color="gray.400" fontSize="sm">
        {author}
      </Text>
    </VStack>
  </Box>
);

const Blog = () => {
  const blogPosts = [
    {
      title: "Will AI take over Art?",
      author: "The Reformist",
      date: "May 29th, 2024",
      category: "Blog",
      image: ai, // Replace with actual image path
    },
    {
      title: "Cryptocurrency vs Tokens",
      author: "The Reformist",
      date: "May 29th, 2024",
      category: "Blog",
      image: crypto, // Replace with actual image path
    },
    {
      title: "Cryptocurrency and Crypto asset",
      author: "The Reformist",
      date: "May 29th, 2024",
      category: "Blog",
      image: crytpoAsset, // Replace with actual image path
    },
  ];

  return (
    <Box bg="rgba(2, 6, 23, 1)" py={16} w="100%" position="relative">
      <Container maxW="7xl">
        <Box
          justifyContent="space-between"
          alignItems="center"
          mb={10}
          display={{ base: "block", md: "flex" }}
        >
          <Heading color="white" size="2xl">
            Read our articles, news and product blog
          </Heading>

          {/* Visit Blog Button */}
          <Button
            variant="outline"
            color="black"
            bg={"white"}
            fontSize="sm"
            fontWeight="medium"
            borderRadius="full"
            px={6}
            py={5}
            _active={{ bg: "whiteAlpha.800" }}
            borderBottom={"1px dashed #333"}
            borderLeft={"1px dashed #333"}
            _hover={{ bg: "blue", color: "white", border: "none" }}
            mt={{ base: "2rem", md: "inherit" }}
          >
            Visit Blog
          </Button>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </SimpleGrid>
        {/* Ready to Scale */}
        <VStack
          spacing={4}
          textAlign="center"
          mt={"7rem"}
          lineHeight={"2rem"}
          verticalAlign={"center"}
        >
          <Text
            color="blue.400"
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="medium"
          >
            Ready to Scale?
          </Text>

          <Text
            color="white"
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="medium"
            maxW="3xl"
          >
            Join successful brands that chose us as their{" "}
            <Text
              as="span"
              color="blue.400"
              display="inline"
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight={"medium"}
            >
              growth accelerator
            </Text>
          </Text>

          <Button
            bg="white"
            color="black"
            rounded="full"
            px={8}
            py={6}
            mt={6}
            fontSize="md"
            fontWeight="medium"
            _hover={{ bg: "blue.400", color: "white" }}
            borderBottom="1px dashed #333"
            borderLeft="1px dashed #333"
          >
            Book a Call
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Blog;

// <VStack display={"flex"} justifyContent={"center"} align={"center"}>
//   <Heading textAlign={"center"} mt={"2rem"} color={"white"}>
//     <Text as="span" color={"blue.400"}>
//       Ready to Scale?
//     </Text>

//     <Text as="span">
//       {" "}
//       Join successful brands that chose us as their
//     </Text>
//     <Text as="span" color={"blue.400"}>
//       {" "}
//       growth accelerator
//     </Text>
//     {/* Visit Blog Button */}
//     <Button
//       variant="outline"
//       color="black"
//       bg={"white"}
//       fontSize="sm"
//       fontWeight="medium"
//       borderRadius="full"
//       px={6}
//       py={5}
//       _active={{ bg: "whiteAlpha.800" }}
//       borderBottom={"1px dashed #333"}
//       borderLeft={"1px dashed #333"}
//       _hover={{ bg: "blue", color: "white", border: "none" }}
//       mt={{ base: "2rem", md: "inherit" }}
//     >
//       Visit Blog
//     </Button>
//   </Heading>
// </VStack>
