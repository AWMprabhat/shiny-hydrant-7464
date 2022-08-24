import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import Homepage from "../Pages/Homepage/Homepage.jsx";
import Register from "../Pages/others/Register.jsx";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
