
import { Box, Flex, Text } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@chakra-ui/react";
import "../../App.css";
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
	let a = 1;
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		rows: a,
	};
	// console.log(data);
	return (
		<Slider {...settings}>
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
						{<IoIosArrowForward />}
					</Flex>
					<Flex>{e.title}</Flex>
					<Flex>
						{e.image.map((e, i) => (
							<div
								style={{
									border: "1px solid #EBF1F4",
									margin: "1px",
									margin: "6px",
								}}
								key={i}>
								<img width="50px" src={e} />
							</div>
						))}
					</Flex>
				</Box>
			))}
		</Slider>
	);
};;

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
