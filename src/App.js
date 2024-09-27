// App.js
import React from "react";
import { Navbar } from "./navbar/Navbar";
import { Routing } from "./routes/Routing";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./AuthenticationProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthProvider>
            <Toaster />
            <Navbar />
            <Routing />
          </AuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
