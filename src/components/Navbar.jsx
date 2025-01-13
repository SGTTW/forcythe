import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  Button,
  Image,
  Text,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

import logo from "../assets/Images/forcythe logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const desktopNavItems = [
    "About",
    "Services",
    "Portfolio",
    "Studio",
    "Foundation",
  ];
  const mobileNavItems = [
    "About",
    "Services",
    "Portfolio",
    "Studio",
    "Foundation",
    "Careers",
    "Blogs",
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      top={0}
      zIndex={1000}
      bg={isScrolled ? "rgba(2, 6, 23, 0.95)" : "rgba(2, 6, 23, 1)"}
      backdropFilter={isScrolled ? "blur(10px)" : "none"}
      transition="all 0.3s ease"
    >
      <Flex
        maxW="7xl"
        mx="auto"
        px={{ base: 4, md: 6 }}
        py={4}
        align="center"
        justify="space-between"
      >
        {/* Logo */}
        <Image
          src={logo}
          alt="Forcythe"
          h="32px"
          fallback={
            <Text color="white" fontWeight="bold" fontSize="xl">
              forcythe
            </Text>
          }
        />

        {/* Desktop Navigation - Moved closer to logo */}
        <HStack
          spacing={8}
          display={{ base: "none", md: "flex" }}
          gap={{ md: "20px" }}
          position="absolute"
          left={{ lg: "300px", md: "200px" }}
        >
          {desktopNavItems.map((item) => (
            <Text
              key={item}
              color="white"
              fontSize="md"
              fontWeight="medium"
              cursor="pointer"
              transition="color 0.2s ease"
              _hover={{ color: "whiteAlpha.800" }}
            >
              {item}
            </Text>
          ))}
        </HStack>

        {/* Book a Call Button */}
        <Button
          display={{ base: "none", md: "flex" }}
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
        >
          Book a Call
        </Button>

        {/* Mobile Menu Button */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={toggleMenu}
          variant="ghost"
          color="white"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          icon={isOpen ? <HiOutlineMenuAlt2 /> : <HiOutlineMenuAlt2 />}
          _hover={{ bg: "whiteAlpha.200" }}
        />

        {/* Mobile Menu Overlay */}
        <Box
          display={{ base: isOpen ? "block" : "none", md: "none" }}
          position="fixed"
          top="90px"
          right="1px"
          width="60%"
          height="auto"
          bg="rgba(2, 6, 23, 0.98)"
          transition="all 0.3s ease"
          borderRadius={"30px"}
        >
          <VStack spacing={6} align="flex-start" p={8}>
            {mobileNavItems.map((item) => (
              <Text
                key={item}
                color="white"
                fontSize="lg"
                fontWeight="medium"
                cursor="pointer"
                _hover={{ color: "whiteAlpha.800" }}
              >
                {item}
              </Text>
            ))}
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
