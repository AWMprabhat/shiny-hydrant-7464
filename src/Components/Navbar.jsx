import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <Flex gap="5rem">
        <Link to="/">Home</Link>
      </Flex>
    </>
  );
};

export default Navbar;
