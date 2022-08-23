import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import Homepage from "../Pages/Homepage/Homepage.jsx";

const AllRoutes = () => {
    return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage />} />
			</Routes>
		</div>
	);
};

export default AllRoutes;
