// App.js
import React from "react";
import { Navbar } from "./navbar/Navbar";
import { Routing } from "./routes/Routing";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./AuthenticationProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routing />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
