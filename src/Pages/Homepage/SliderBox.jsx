import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@chakra-ui/react";
import "../../App.css";

export const SliderBox = () => {
	let a = 2;
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		rows: a,
	};
	console.log("settings.rows: ", settings.rows);
	return (
		<Container border="2px solid black">
			<h2> Single Item</h2>
			<Slider {...settings}>
				<div>
					<h3>1</h3>
				</div>
				<div>
					<h3>2</h3>
				</div>
				<div>
					<h3>3</h3>
				</div>
				<div>
					<h3>4</h3>
				</div>
				<div>
					<h3>5</h3>
				</div>
				<div>
					<h3>6</h3>
				</div>
				<div>
					<h3>6</h3>
				</div>
			</Slider>
		</Container>
	);
};
