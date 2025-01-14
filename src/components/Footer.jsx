import React from "react";
import {
  Box,
  Container,
  Text,
  Input,
  InputGroup,
  Checkbox,
  VStack,
  HStack,
  Image,
  Grid,
  GridItem,
  Flex,
  InputRightAddon,
} from "@chakra-ui/react";

import logo from "../assets/Images/forcythe logo.svg";

import facebook from "../assets/Images/facebook.svg";
import instagram from "../assets/Images/instagram.svg";
import x from "../assets/Images/x.svg";
import linkedin from "../assets/Images/linkedin.svg";
import youtube from "../assets/Images/youtube.svg";
import podcast from "../assets/Images/Icon.svg";
const Footer = () => {
  return (
    <Box bg="#0A192F" color="white" py={16}>
      <Container maxW="7xl" px={{ base: 4, md: 8 }}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          {/* Email Subscription Section */}
          <GridItem>
            <VStack align="flex-start" spacing={4}>
              <InputGroup size="lg" maxW="380px">
                <Input
                  placeholder="Your Email Address"
                  bg="transparent"
                  border="1px solid"
                  borderColor="gray.600"
                  _placeholder={{ color: "gray.400" }}
                  height="40px"
                  borderRadius="30px"
                />
                <InputRightAddon
                  color="black"
                  bg="white"
                  height="40px"
                  borderRadius="0 30px 30px 0"
                  border={"none"}
                >
                  Subscribe
                </InputRightAddon>
              </InputGroup>

              <Checkbox
                colorScheme="blue"
                defaultIsUnchecked
                sx={{
                  span: {
                    borderRadius: "50%",
                  },
                }}
              >
                <Text fontSize="sm">
                  I agree to receive other notifications from Forcythe
                </Text>
              </Checkbox>
            </VStack>
          </GridItem>

          {/* Center Content */}
          <GridItem>
            <VStack align="flex-start" spacing={6}>
              <Image src={logo} alt="Forcythe" h="30px" />
              <Text color="gray.400" lineHeight="tall">
                We are the growth company for businesses looking to scale. We
                are dedicated to transforming businesses with bespoke digital
                solutions that drive growth.
              </Text>
              <HStack spacing={4}>
                {/* social media icon images */}
                <Image src={facebook} alt="Facebook" h="20px" />
                <Image src={instagram} alt="Instagram" h="20px" />
                <Image src={x} alt="Twitter" h="20px" />
                <Image src={linkedin} alt="LinkedIn" h="20px" />
                <Image src={youtube} alt="YouTube" h="20px" />
                <Image src={podcast} alt="Podcast" h="20px" />
              </HStack>
            </VStack>
          </GridItem>

          {/* Navigation Links */}
          <GridItem>
            <VStack align="flex-start" spacing={3}>
              <Text fontSize="xl" fontWeight="bold" mb={2}>
                Company
              </Text>
              {[
                "About",
                "Services",
                "Portfolio",
                "Studio",
                "Foundation",
                "Careers",
                "Blog",
              ].map((item) => (
                <Text
                  key={item}
                  color="gray.400"
                  _hover={{ color: "white", cursor: "pointer" }}
                >
                  {item}
                </Text>
              ))}
            </VStack>
          </GridItem>
        </Grid>

        {/* Copyright Section */}
        <Flex
          borderTop="1px solid"
          borderColor="gray.700"
          mt={16}
          pt={8}
          justify="space-between"
          direction={{ base: "column", md: "row" }}
          gap={4}
        >
          <Text color="gray.400">
            Copyright © 2024 Forcythe. All rights reserved.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
