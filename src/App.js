// App.js
import React from "react";
import { ResponsiveBar } from "./navbar/Navbar";
import { VenueFetcher } from "./venue/VenueFetcher";

function App() {
  return (
    <>
      <ResponsiveBar />
      <VenueFetcher />
    </>
  );
}

export default App;
