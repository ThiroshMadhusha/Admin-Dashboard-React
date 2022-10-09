import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Bookings from "../pages/Bookings";
import SellCar from "../pages/SellCar";
import Service from "../pages/Service";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Setting from "../pages/Setting";
import Profile from "../pages/Profile";


const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/dashboard" element={<Dashboard />} />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/sell-car" element={<SellCar />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/service" element={<Service />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default Router;
