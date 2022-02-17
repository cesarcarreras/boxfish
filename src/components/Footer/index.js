import React from "react";
import { Flex, Image, SimpleGrid } from "@chakra-ui/react";

import img1 from "../../assets/images/fake1.svg";
import img2 from "../../assets/images/fake2.svg";
import img3 from "../../assets/images/fake3.svg";
import img4 from "../../assets/images/fake4.svg";
import img5 from "../../assets/images/fake5.svg";
import img6 from "../../assets/images/fake6.svg";

const Footer = () => {
  return (
    <Flex
      h="184px"
      direction={["column", "column", "column", "row"]}
      align="center"
    >
      <SimpleGrid w="full" minChildWidth="120px" spacing={1} pl={20}>
        <Flex w={["30px", "30px", "40px", "40px"]} align="center">
          <Image
            src={img1}
            alt="Linkedin logo"
            style={{
              filter: `saturate(500%) contrast(800%) brightness(500%)
                            invert(80%) sepia(50%) hue-rotate(120deg)`,
            }}
            mt={[10, 10, 0, 0]}
          />
        </Flex>
        <Flex w={["60px", "60px", "75px", "75px"]} align="center">
          <Image
            src={img3}
            alt="Vans logo"
            style={{
              filter: `saturate(500%) contrast(800%) brightness(500%)
                            invert(80%) sepia(50%) hue-rotate(120deg)`,
            }}
            mt={[10, 10, 0, 0]}
          />
        </Flex>
        <Flex w={["30px", "30px", "50px", "50px"]} align="center">
          <Image
            src={img6}
            alt="YK logo"
            style={{
              filter: `saturate(500%) contrast(800%) brightness(500%)
                            invert(80%) sepia(50%) hue-rotate(120deg)`,
            }}
            mt={[10, 10, 0, 0]}
          />
        </Flex>
        <Flex w={["30px", "30px", "40px", "40px"]} align="center">
          <Image
            src={img5}
            alt="Twitter logo"
            style={{
              filter: `saturate(500%) contrast(800%) brightness(500%)
                            invert(80%) sepia(50%) hue-rotate(120deg)`,
            }}
            mt={[10, 10, 0, 0]}
          />
        </Flex>
        <Flex w={["30px", "30px", "40px", "40px"]} align="center">
          <Image
            src={img2}
            alt="Something logo"
            style={{
              filter: `saturate(500%) contrast(800%) brightness(500%)
                            invert(80%) sepia(50%) hue-rotate(120deg)`,
            }}
            mt={[10, 10, 0, 0]}
          />
        </Flex>
        <Flex w={["30px", "30px", "40px", "40px"]} align="center">
          <Image
            src={img4}
            alt="Apple logo"
            style={{
              filter: `saturate(500%) contrast(800%) brightness(500%)
                            invert(80%) sepia(50%) hue-rotate(120deg)`,
            }}
            mt={[10, 10, 0, 0]}
          />
        </Flex>
      </SimpleGrid>
    </Flex>
  );
};

export default Footer;
