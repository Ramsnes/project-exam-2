// Routing.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { VenueFetcher } from "../venues/Home";
import { Venue } from "../venues/Venue";
import { RegisterPage } from "../register/RegisterPage";
import { LoginPage } from "../login/LoginPage";

export function Routing() {
  return (
    <Routes>
      <Route path="/" element={<VenueFetcher />} />
      <Route path="/venue/:id" element={<Venue />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
