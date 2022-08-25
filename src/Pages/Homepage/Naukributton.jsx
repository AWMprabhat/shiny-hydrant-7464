import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const data = [
	{
		name: "Remote",
		logo: "https://static.naukimg.com/s/0/0/i/trending-naukri/remote.svg",
	},
	{
		name: "MNC",
		logo: "https://static.naukimg.com/s/0/0/i/trending-naukri/mnc.svg",
	},
	{
		name: "Software...",
		logo: "https://static.naukimg.com/s/0/0/i/trending-naukri/software.svg",
	},
	{
		name: "Data Science",
		logo: "https://static.naukimg.com/s/0/0/i/trending-naukri/data-science.svg",
	},
	{
		name: "Engineering",
		logo: "https://static.naukimg.com/s/0/0/i/trending-naukri/engineering.svg",
	},
	{
		name: "Analytics",
		logo: "https://static.naukimg.com/s/0/0/i/trending-naukri/analytics.svg",
	},
	{
		name: "Fortune 500",
		logo: "https://static.naukimg.com/s/0/0/i/trending-naukri/fortune-500.svg",
	},
	{
		name: "Supply...",
		logo: "https://static.naukimg.com/s/0/0/i/trending-naukri/supplychain.svg",
	},
	{
		name: "Marketing",
		logo: "https://static.naukimg.com/s/0/0/i/trending-naukri/marketing.svg",
	},
	{
		name: "Startup",
		logo: "https://static.naukimg.com/s/0/0/i/trending-naukri/startup.svg",
	},
	{
		name: "Temp Work",
		logo: "https://static.naukimg.com/s/0/0/i/trending-naukri/temporary-wfh.svg",
	},
];

const Naukributton = () => {
	return (
		<>
			{data.map((e) => (
				<button
					key={e.name}
					style={{
						border: "1px solid #EBF1F4 ",
						margin: "6px",
						height: "80px",
						borderTopLeftRadius: "15%",
						borderTopRightRadius: "5%",
						borderBottomRightRadius: "15%",
						borderBottomLeftRadius: "5%",
					}}>
					<Flex align="center" gap="20px" justify="center">
						<img src={e.logo} width="40px" />
						{e.name} <span>{<IoIosArrowForward />}</span>
					</Flex>
				</button>
			))}
		</>
	);
};

export default Naukributton;
