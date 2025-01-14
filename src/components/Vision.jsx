import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Tabs,
  TabList,
  Tab,
  VStack,
  Image,
  Container,
} from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";

// Import images for each tab
import idea from "../assets/Images/camera-man.svg";
import design from "../assets/Images/plan-design.svg";
import develop from "../assets/Images/plan-develop.svg";
import launch from "../assets/Images/plan-launch.svg";

const Vision = () => {
  const [currentTab, setCurrentTab] = useState(0);

  // Data for each tab
  const tabData = [
    {
      title: "Your vision is unique",
      image: idea,
      description:
        "Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let’s us shape it.",
    },
    {
      title: "Crafting the blueprint for success",
      image: design,
      description:
        "Design is more than aesthetics, it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.",
    },
    {
      title: "Turning blueprints into reality.",
      description:
        "Build with precision and expertise to ensure your project thrives in any environment.",
      image: develop,
      description:
        "We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.",
    },
    {
      title: "Your launchpad to the market.",
      description:
        "Take the final step with confidence and see your vision brought to life for the world to see.",
      image: launch,
      description:
        "Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition.",
    },
  ];

  return (
    <Box
      as="section"
      bg="rgba(2, 6, 23, 1)"
      color="white"
      w="100%"
      position="relative"
      left="50%"
      right="50%"
      marginLeft="-50vw"
      marginRight="-50vw"
      py={16}
    >
      <Container maxW="7xl" px={{ base: 4, md: 6 }}>
        <Flex
          align="center"
          justify="space-between"
          direction={{ base: "column", md: "row" }}
        >
          {/* Left Section */}
          <VStack align="flex-start" spacing={6} maxW="lg">
            <Text fontSize="3xl" fontWeight="bold" lineHeight="short">
              From{" "}
              <Text as="span" color="blue.400">
                Spark
              </Text>{" "}
              to{" "}
              <Text as="span" color="blue.400">
                Spotlight
              </Text>
              : we take you every step of the way to success.
            </Text>

            {/* Tabs */}
            <Tabs
              variant="unstyled"
              onChange={(index) => {
                setCurrentTab(index);
              }}
            >
              <TabList
                border="1px solid white"
                borderRadius="full"
                px={2}
                py={1}
                display="flex"
                justifyContent="space-between"
                maxW="full"
              >
                {["Idea", "Design", "Develop", "Launch"].map((tab) => (
                  <Tab
                    key={tab}
                    _selected={{
                      bg: "blue.400",
                      color: "white",
                      borderRadius: "full",
                    }}
                    px={4}
                    py={2}
                    fontWeight="medium"
                  >
                    {tab}
                  </Tab>
                ))}
              </TabList>
            </Tabs>

            <Text fontSize="3xl" fontWeight="bold" lineHeight="short">
              <Typewriter
                key={currentTab + "-title"}
                words={[tabData[currentTab].title]}
                loop={1}
                typeSpeed={70}
                deleteSpeed={0}
                cursor={false}
              />
            </Text>

            <Text fontSize="lg" opacity={0.8}>
              <Typewriter
                key={currentTab + "-description"}
                words={[tabData[currentTab].description]}
                loop={1}
                typeSpeed={70}
                deleteSpeed={0}
                cursor={false}
              />
            </Text>
            {/* Call-to-Action Button */}
            <Button
              bg="white"
              color="black"
              rounded="full"
              px={6}
              py={5}
              fontSize="sm"
              fontWeight="medium"
              _hover={{ bg: "blue.400", color: "white", border: "none" }}
              borderBottom="1px dashed #333"
              borderLeft="1px dashed #333"
            >
              Book a Call
            </Button>
          </VStack>

          {/* Right Section with Dynamic Image */}
          <Box
            display={{ base: "block", md: "block" }}
            flexShrink={0}
            ml={{ md: 8 }}
            mt={{ base: "3rem", md: "initial" }}
          >
            <Image
              src={tabData[currentTab].image}
              alt="Illustration"
              boxSize={{ base: "full", md: "400px" }}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Vision;
