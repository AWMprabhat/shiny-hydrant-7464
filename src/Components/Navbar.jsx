import React from "react";
import { Link } from "react-router-dom";
import {Flex} from "@chakra-ui/react"

const Navbar = () => {
    return (
		<>
		<Flex gap="5rem">
			<Link to="/">Home</Link>
			<Link to="/register">Register</Link>
			<Link to="/login">Login</Link>
		</Flex>
		</>
	);
};

export default Navbar;
