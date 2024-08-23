// Routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { VenueFetcher } from "../venues/Home";

export function Routing() {
  return (
    <Routes>
      <Route path="/" element={<VenueFetcher />} />
    </Routes>
  );
}
