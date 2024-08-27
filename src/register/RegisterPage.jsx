// RegisterPage.jsx
import React from "react";
import { RegisterForm } from "./RegisterForm";

export function RegisterPage() {
  const handleRegisterSubmit = (data) => {
    // Sending the data to an API
    console.log("Register form data:", data);
  };

  return (
    <div>
      <h1 className="register-h1">Register form</h1>
      <RegisterForm onSubmit={handleRegisterSubmit} />
    </div>
  );
}
