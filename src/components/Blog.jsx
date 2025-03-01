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

const BlogCard = ({ title, date, author, category, image }) => (
  <Box
    _hover={{
      transform: "translateY(-8px)",
      borderleft: "2px solid",
      borderBottom: "2px solid",
      borderBottomRadius: "30px",
      borderColor: "blue.400",
      "& > div:first-of-type img": {
        transform: "scale(1)",
      },
      "& > div:last-of-type": {
        transform: "scale(0.98)",
      },
      px: "8px",
    }}
  >
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
    <VStack
      align="flex-start"
      spacing={2}
      pl={4}
      borderLeft="1px solid"
      // height="24%"
      borderColor="white"
      mb={5}
    >
      <Text color="white" fontSize="sm" fontWeight="bold">
        {category}
      </Text>
      <HStack spacing={1}>
        <Text color="gray.400" fontSize="sm">
          {author}
        </Text>
        <Text color="gray.400" fontSize="sm">
          •
        </Text>
        <Text color="gray.400" fontSize="sm">
          {date}
        </Text>
      </HStack>
      <Heading size="md" color="white" mt={2}>
        {title}
      </Heading>
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
      image: ai,
    },
    {
      title: "Cryptocurrency vs Tokens",
      author: "The Reformist",
      date: "May 29th, 2024",
      category: "Blog",
      image: crypto,
    },
    {
      title: "Cryptocurrency and Crypto asset",
      author: "The Reformist",
      date: "May 29th, 2024",
      category: "Blog",
      image: crytpoAsset,
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
          <Heading color="white" fontSize="4xl" fontWeight={"md"}>
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
