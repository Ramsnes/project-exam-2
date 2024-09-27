// Routing.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../venues/Home";
import { Venue } from "../venues/Venue";
import { RegisterPage } from "../register/RegisterPage";
import { LoginPage } from "../login/LoginPage";
import { ProfilePage } from "../profile/ProfilePage";
import { CreateVenuePage } from "../createVenue/CreateVenuePage";
import { ContactPage } from "../contact/Contact";
import { Booking } from "../venues/Booking";
import { MyVenues } from "../venues/MyVenues";
import { VenueEdit } from "../venues/VenueEdit";
import { MyBookingsPage } from "../bookings/MyBookingsPage";

export function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/venue/:id" element={<Venue />} />
      <Route path="/venue/:id/edit" element={<VenueEdit />} />
      <Route path="/venue/:id/booking" element={<Booking />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/create-venue" element={<CreateVenuePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/my-venues" element={<MyVenues />} />
      <Route path="/my-bookings" element={<MyBookingsPage />} />
    </Routes>
  );
}
