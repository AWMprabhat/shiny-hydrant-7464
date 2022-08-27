import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Container, Flex } from "@chakra-ui/react";
import "../../App.css";
import { Link } from "react-router-dom";
const SponsoredCompany = ({ data }) => {
	console.log("data: manish ", data);
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 2,
		rows: 2,
	};
	return (
		<div>
			<Slider {...settings}>
				{data.length > 0 &&
					data.map((e, i) => (
						<Box key={e.id}>
							<Box
								style={{
									boxShadow:
										"rgba(100, 100, 111, 0.2) 0px 2px 5px 0px",
									height: "380px",
									padding: "20px",
									margin: "10px",
									borderRadius: "10px",
									textAlign: "center",
								}}>
								<img
									width="100px"
									src={e.image}
									alt="companyimage"
									style={{
										margin: "auto",
										padding: "10px",
										marginBottom: "10px",
									}}
								/>
								<Box
									style={{
										background: "whitesmoke",
										padding: "10px",
										fontSize: "14px",
										borderRadius: "10px",
									}}>
									<Box as="h6" fontSize="18px">
										{e.name}
									</Box>
									<Flex
										gap="15px"
										align="center"
										justify="center">
										<Box>&#11088;{e.rating}</Box>
										<Box>
											{e.reviews}K+
											{` `} reviews
										</Box>
									</Flex>
								</Box>
								<Box fontSize="16px" m="2">
									{e.description}
								</Box>
								<Link to={`/company/${e.id}`}>
									<Button style={{ marginBottom: "0px" }}>
										view jobs
									</Button>
								</Link>
							</Box>
						</Box>
					))}
			</Slider>
		</div>
	);
};

export default SponsoredCompany;
