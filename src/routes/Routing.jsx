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
import { BookingsForm } from "../bookings/BookingsForm";
import { MyVenuesForm } from "../venues/MyVenuesForm";
import { UpdateProfile } from "../profile/UpdateProfile";

export function Routing() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/venue/:id" element={<Venue />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/create-venue" element={<CreateVenuePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/my-bookings" element={<BookingsForm />} />
      <Route path="/my-venues" element={<MyVenuesForm />} />
      <Route path="/update-profile" element={<UpdateProfile />} />
    </Routes>
  );
}
