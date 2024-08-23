// Routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { VenueFetcher } from "../venues/FeaturedVenues";
import { AllVenues } from "../venues/AllVenues";

export function Routing() {
  return (
    <Routes>
      <Route path="/" element={<VenueFetcher />} />
      <Route path="/venues" element={<AllVenues />} />
    </Routes>
  );
}
