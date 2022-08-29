import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer.jsx";
import Navbar from "../Components/Navbar.jsx";
import Company from "../Pages/Companies/Company.jsx";
import CompanyStore from "../Pages/Companies/CompanyStore.jsx";
import Homepage from "../Pages/Homepage/Homepage.jsx";
import Login from "../Pages/Login/Login.jsx";
import Register from "../Pages/Login/Register.jsx";
import AboutPage from "../Pages/others/AboutPage.jsx";

const AllRoutes = () => {
	return (
		<div>
			<div
				style={{
					position: "sticky",
					top: "0",
					backgroundColor: "white",
					zIndex: "999999",
				}}>
				<Navbar />
			</div>
			<Routes>
				<Route path="/" element={<Homepage />} />



			  <Route path="/register" element={<Register />} />
			  

				<Route path="/about" element={<AboutPage />} />
				<Route path="/login" element={<Login />} />

				<Route path="/company" element={<Company />} />
				<Route path="/company/:id" element={<CompanyStore />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default AllRoutes;


