// Routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { VenueFetcher } from "../venues/Home";
import { Venue } from "../venues/Venue";

export function Routing() {
  return (
    <Routes>
      <Route path="/" element={<VenueFetcher />} />
      <Route path="/venue/:id" element={<Venue />} />
    </Routes>
  );
}
