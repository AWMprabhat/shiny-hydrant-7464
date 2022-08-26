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
import SingalSlideBox from "./SingalSlideBox.jsx";
import { useSelector } from "react-redux";

const Homepage = () => {
	const data = useSelector((a) => a);
	// console.log("data: ", data);

	return (
		<Box width="80%" m="auto" color="#445578">
			<Box mt="60px">
				<Heading color="black" size="xl">
					Find your dream job now
				</Heading>
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
						<Heading color="black" size="sm">
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
				<Heading color="black" size="lg">
					Trending on Naukri today
				</Heading>
			</Box>
			{/* buttons */}

			<Box m="auto" mt="60px" color="#445578" width="80%">
				<Naukributton />
			</Box>
			<Box mt="60px" color="#445578">
				<Heading color="black" size="lg">
					Explore top companies hiring now
				</Heading>
			</Box>
			<Box m="auto" mt="60px" width="80%">
				<TopCompanies />
			</Box>
			<Box mt="60px" color="#445578">
				<Heading color="black" size="lg">
					Featured companies actively hiring
				</Heading>
			</Box>
			<Box
				width="60%"
				height="300px"
				border="2px solid black"
				m="auto"
				mt="60px">
				<h1>Companies Cards</h1>
				{/* TODO */}
			</Box>
			{/* single Tab Slider work start -------------------------------- */}
			<Box>
				{/* discover jobs across  */}
				<Box>
					<Box
						width="80%"
						m="auto"
						mt="60px"
						position="relative"
						mb="60px"
						p="60px 0px 60px 80px"
						borderTopLeftRadius="15%"
						borderTopRightRadius="5%"
						borderBottomRightRadius="15%"
						borderBottomLeftRadius="5%"
						// border="2px solid blue"
						textAlign="left"
						bgColor="#FEF9F4">
						<img
							width="105px"
							height="105px"
							src="https://static.naukimg.com/s/0/0/i/role-collection.png"
							alt="discover job section"
						/>
						<Heading color="black" fontSize="27px">
							Discover jobs across
						</Heading>
						<Heading color="black" fontSize="27px">
							popular roles
						</Heading>
						<Text mt="12px" fontSize="17px">
							Select a role and we'll show
						</Text>
						<Text fontSize="17px">you relevant jobs for it!</Text>
					</Box>
					{/* < discover jobs Slider work */}
					<Box
						width="40%"
						style={{
							position: "relative",
							left: "700px",
							top: "-435px",
						}}>
						<SingalSlideBox />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};;

export default Homepage;


