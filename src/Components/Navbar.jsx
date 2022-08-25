import React from "react";
import { Link } from "react-router-dom";
import { Flex, Button, Box } from "@chakra-ui/react";

const Navbar = () => {
	return (
		<Box p="20px" width="80%" m="auto">
			<Flex align="center" justify="space-evenly" gap="0">
				<Box width="20%" m="0">
					<Flex justify="center">
						<Link to="/">
							<img
								src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png"
								alt="Logo"
							/>
						</Link>
					</Flex>
				</Box>

				<Box width="40%" color="#8292b4" fontSize="20px">
					<Flex align="center" gap="10">
						<Link to="/">Jobs</Link>
						<Link to="/">Companies</Link>
						<Link to="/">Services</Link>
						<Link to="/">Resources</Link>
					</Flex>
				</Box>
				<Box width="40%">
					<Flex align="center" ml="60px" gap="10px">
						<Link to="/login">
							<Button
								borderRadius="40px"
								variant="outline"
								size="sm"
								colorScheme="blue">
								Login
							</Button>
						</Link>
						<Link to="/register">
							<Button
								borderRadius="40px"
								size="sm"
								color="white"
								bgColor="#fe7554">
								Register
							</Button>
						</Link>
						<Link to="/">
							<Box
								fontWeight="bold"
								colorScheme="red"
								color="#445578">
								For employers
							</Box>
						</Link>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
};

export default Navbar;
