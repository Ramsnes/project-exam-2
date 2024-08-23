// App.js
import React from "react";
import { Navbar } from "./navbar/Navbar";
import { Routing } from "./routes/Routing";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
