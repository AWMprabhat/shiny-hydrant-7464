import { Box, Flex, Text } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";

const data = [
	{
		name: "Full Stack Developer",
		title: "24.6K+ Jobs",
	},
	{
		name: "Mobile/App Developer",
		title: "2.3K+ Jobs",
	},
	{
		name: "Front End Developer",
		title: "3.1K+ Jobs",
	},
	{
		name: " Engineering Manager",
		title: "1.8K+ Jobs",
	},
	{
		name: "Technical Engineer",
		title: "1.5K+ Jobs",
	},
	{
		name: "Technical Lead",
		title: "14.5K+ Jobs",
	},
	{
		name: "Full Stack Developer",
		title: "24.6K+ Jobs",
	},
	{
		name: "Mobile/App Developer",
		title: "2.3K+ Jobs",
	},
	{
		name: "Front End Developer",
		title: "3.1K+ Jobs",
	},
	{
		name: " Engineering Manager",
		title: "1.8K+ Jobs",
	},
	{
		name: "Technical Engineer",
		title: "1.5K+ Jobs",
	},
	{
		name: "Technical Lead",
		title: "14.5K+ Jobs",
	},
];

const SingalSlideBox = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		rows: 3,
	};
	// console.log(data);
	return (
		<Slider
			{...settings}
			style={{
				border: "2px solid #8292b4",
				padding: "80px",
				width: "100%",
				backgroundColor: "white",
			}}>
			{data.map((e, i) => (
				<Box
					key={i}
					style={{
						margin: "4px",
						lineHeight: "40px",
						border: "2px solid #EBF1F4",
						borderTopLeftRadius: "15%",
						borderTopRightRadius: "5%",
						borderBottomRightRadius: "15%",
						borderBottomLeftRadius: "5%",
						padding: "6px",
					}}>
					<Flex align="center">
						<Text fontWeight="bold">{e.name}</Text>
					</Flex>
					<Flex>
						<span>
							{e.title} {<IoIosArrowForward />}
						</span>
					</Flex>
				</Box>
			))}
		</Slider>
	);
};

export default SingalSlideBox;
