import React from "react";
import {
	Flex,
	Button,
	Input,
	Container,
	Box,
	Heading,
	Select,
	Text,
	Image,
} from "@chakra-ui/react";
import Naukributton from "./Naukributton.jsx";
import TopCompanies from "./TopCompanies.jsx";

const Homepage = () => {
	return (
		<Box width="80%" m="auto" color="#445578">
			<Box mt="60px">
				<Heading size="xl">Find your dream job now</Heading>
				<Text>5 lakh+ jobs for you to explore</Text>
			</Box>
			{/* input box completed */}
			<Box
				padding="4px"
				border="2px solid #8292b4"
				width="60%"
				// height="80px"
				borderRadius="20px"
				m="auto"
				mt="40px">
				<Flex align="center" gap="2px">
					<img
						src="https://static.naukimg.com/s/7/103/i/search.9ec0e1ac.svg"
						alt="search icon"
					/>
					<Input
						// variant="flushed"
						variant="unstyled"
						color="#8292b4"
						border="0"
						width="30%"
						type="text"
						placeholder="Enter skills / designations / companies"
					/>
					<Select
						variant="unstyled"
						color="#8292b4"
						border="0"
						width="30%"
						placeholder="Select experience">
						<option>1 year</option>
						<option>2 years</option>
						<option>3 years</option>
						<option>4 years</option>
						<option>5 years</option>
					</Select>
					<Input
						variant="unstyled"
						color="#8292b4"
						border="0"
						width="30%"
						type="text"
						placeholder="Enter location"
					/>
					<Button borderRadius="40px" colorScheme="blue">
						Search
					</Button>
				</Flex>
			</Box>

			<Box mt="60px">
				<Flex align="center" justify="center" gap="15px">
					<Box>
						<Flex>
							<Image
								borderRadius="full"
								src="https://static.naukimg.com/s/0/0/i/homepage-register/accenture-logo.png"
								alt="accenture logo"
							/>
							<Image
								src="https://static.naukimg.com/s/0/0/i/homepage-register/myntra-logo.png"
								alt="myntra logo"
							/>
						</Flex>
					</Box>
					<Box>
						<Heading size="sm">
							Get contacted by top companies hiring on Naukri!
						</Heading>
						<Text size="sm">
							Your chance to build that dream career is here
						</Text>
					</Box>
					<Box>
						<Button
							borderRadius="40px"
							size="sm"
							color="white"
							bgColor="#fe7554">
							Register
						</Button>
					</Box>
				</Flex>
			</Box>

			<Box mt="60px" color="#445578">
				<Heading size="lg">Trending on Naukri today</Heading>
			</Box>
			{/* buttons */}
			<Box m="auto" mt="60px" color="#445578" width="80%">
				<Naukributton />
			</Box>
			<Box mt="60px" color="#445578">
				<Heading size="lg">Explore top companies hiring now</Heading>
			</Box>
			<Box m="auto" mt="60px" width="80%">
				<TopCompanies />
			</Box>
			<Box mt="60px" color="#445578">
				<Heading size="lg">Featured companies actively hiring</Heading>
			</Box>
		</Box>
	);
};

export default Homepage;


