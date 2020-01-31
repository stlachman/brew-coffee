import React from "react";
import { Flex, Text } from "rebass";

const Footer = () => {
  return (
    <Flex py={3} px={2} as="footer" color="white" bg="black">
      <Text>
        Built with{" "}
        <span role="img" aria-label="coffee mug">
          ☕️
        </span>
      </Text>
    </Flex>
  );
};

export default Footer;
