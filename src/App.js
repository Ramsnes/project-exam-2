// App.js
import React from "react";
import { Routing } from "./routes/Routes";
import { ResponsiveBar } from "./navbar/Navbar";

function App() {
  return (
    <>
      <ResponsiveBar />
      <Routing />
    </>
  );
}

export default App;
