import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer.jsx";
import Navbar from "../Components/Navbar.jsx";
import Company from "../Pages/Companies/Company.jsx";
import CompanyStore from "../Pages/Companies/CompanyStore.jsx";
import Homepage from "../Pages/Homepage/Homepage.jsx";
import Login from "../Pages/Login/Login.jsx";
import Register from "../Pages/Login/Register.jsx";

const AllRoutes = () => {
  return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/company" element={<Company />} />
				<Route path="/company/:id" element={<CompanyStore />} />
			</Routes>
			<Footer />
		</div>
  );
};

export default AllRoutes;
