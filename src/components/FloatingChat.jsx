import React, { useState } from "react";
import {
  Box,
  IconButton,
  VStack,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { FaCircleChevronDown } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";

const FloatingChat = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position="fixed" bottom="2rem" right="2rem" zIndex={1000}>
      {isOpen ? (
        <Box
          bg="white"
          borderRadius="lg"
          boxShadow="lg"
          width="300px"
          maxHeight="500px"
          position="absolute"
          bottom="0"
          right="0"
          overflow="hidden"
        >
          {/* Chat Header */}
          <Box
            p={4}
            bg="blue.500"
            color="white"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text fontWeight="medium">Conversation(s)</Text>
            <IconButton
              icon={<FaCircleChevronDown size={20} />}
              variant="ghost"
              color="white"
              _hover={{ bg: "blue.600" }}
              onClick={onToggle}
              aria-label="Close chat"
              size="sm"
            />
          </Box>

          {/* Chat Content */}
          <VStack
            spacing={4}
            p={4}
            bg="gray.50"
            height="400px"
            align="center"
            justify="center"
          >
            <Box textAlign="center" py={8}>
              <Box
                width="100px"
                height="100px"
                borderRadius="full"
                bg="gray.200"
                mb={4}
                mx="auto"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <TiMessages size={40} color="gray" />
              </Box>
              <Text color="gray.500" mb={4}>
                No ongoing conversation
              </Text>
              <Button
                colorScheme="blue"
                size="sm"
                onClick={() => console.log("Chat started")}
              >
                Chat Now
              </Button>
            </Box>
          </VStack>
        </Box>
      ) : (
        <IconButton
          icon={<TiMessages />}
          colorScheme="blue"
          borderRadius="full"
          width="50px"
          height="50px"
          onClick={onToggle}
          aria-label="Open chat"
          boxShadow="lg"
        />
      )}
    </Box>
  );
};

export default FloatingChat;
