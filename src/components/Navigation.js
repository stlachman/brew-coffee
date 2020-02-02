import React from "react";
import { Flex, Box, Link } from "rebass";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex py={3} px={2} color="white" bg="black" alignItems="center">
      <Link mx={2} color="white" as={NavLink} to="/">
        Home
      </Link>
      <Link mx={2} color="white" as={NavLink} to="/brewing-methods">
        Brewing Methods
      </Link>
      <Box mx="auto" />
    </Flex>
  );
};

export default Navigation;
