import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const data = [
	{
		name: "MNCs",
		title: "1.2K+ are actively hiring",
		image: [
			"https://img.naukimg.com/logo_images/groups/v1/1186200.gif",
			"https://img.naukimg.com/logo_images/groups/v1/521230.gif",
			"https://img.naukimg.com/logo_images/groups/v1/869714.gif",
			"https://img.naukimg.com/logo_images/groups/v1/29798.gif",
		],
	},
];

const TopCompanies = () => {
	console.log(data);
	return (
		<>
			{data.map((e, i) => (
				<Box key={i}>
					<Flex align="center">
						{e.name}
						{<IoIosArrowForward />}
					</Flex>
					<Flex>{e.title}</Flex>
					<Flex></Flex>
				</Box>
			))}
		</>
	);
};

export default TopCompanies;
