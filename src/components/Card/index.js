import React from "react";
import {
  Flex,
  Text,
  Image,
  Container,
  VStack,
  Heading,
} from "@chakra-ui/react";

import heroImg from "../../assets/images/HERO-IMG.svg";

const Card = () => {
  return (
    <Container maxW="1355px" p={0}>
      <Flex
        h={["449px", "449px", "606px", "606px"]}
        p={10}
        direction={["column", "column", "row", "row"]}
        w="full"
        align="center"
      >
        <VStack spacing={5} justify="center" alignItems="flex-start">
          <Heading fontSize={["24px", "36px", "36px", "36px"]}>
            Engineering with{" "}
            <Text as="span" color="accent2.100">
              love
            </Text>{" "}
            and{" "}
            <Text as="span" color="accent2.100">
              passion
            </Text>
          </Heading>

          <Text
            fontSize="16px"
            fontWeight="600"
            color="gray.600"
            lineHeight="24px"
          >
            High-quality solutions for emerging technologies and industries
          </Text>
        </VStack>
        <Image
          src={heroImg}
          w={["332px", "400px", "500px", "600px"]}
          h={["209px", "400px", "500px", "600px"]}
          alt="Hero Image Bike"
        />
      </Flex>
    </Container>
  );
};

export default Card;
