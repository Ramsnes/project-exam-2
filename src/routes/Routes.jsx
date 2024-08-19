// Routes.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Contact } from "../contact/Contact";

export function Routing() {
  // Stores the current location in the browser's address bar
  <BrowserRouter>
    <div>
      <Routes>
        {/* Har ikke laget layout ennå  */}
        <Route element={<Layout />}>
          <Route index element={<Contact />} />
          {/* <Route path="*" element={<RouteNotFound />} /> */}
        </Route>
      </Routes>
    </div>
  </BrowserRouter>;
}
