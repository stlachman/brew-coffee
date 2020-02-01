import React from "react";
import { Flex } from "rebass";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <Flex
        minHeight="100vh"
        maxWidth="960px"
        margin="20px auto"
        flexDirection="column"
        as="main"
      >
        {children}
      </Flex>
      <Footer />
    </>
  );
};

export default Layout;
