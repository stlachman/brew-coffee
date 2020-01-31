import React from "react";
import { Flex, Box, Link } from "rebass";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex py={3} px={2} color="white" bg="black" alignItems="center">
      <Link mx={2} color="white" as={NavLink} to="/">
        Home
      </Link>
      <Link mx={2} color="white" as={NavLink} to="/methods">
        Methods
      </Link>
      <Box mx="auto" />
      {/* <Link color="white" as={NavLink} to="/profile">
        Profile
      </Link> */}
    </Flex>
  );
};

export default Navigation;
