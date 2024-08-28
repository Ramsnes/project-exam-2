// RegisterPage.jsx
import React, { useState } from "react";
import { RegisterForm } from "./RegisterForm";
import { Loader } from "../loader/Loader";
import { useNavigate } from "react-router-dom";

const baseUrl = "https://v2.api.noroff.dev";

export function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegisterSubmit = async (data) => {
    setLoading(true);

    try {
      const result = await fetch(`${baseUrl}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (result.ok) {
        navigate("/login");
      } else {
        alert("An error occurred");
      }
    } catch (error) {
      alert("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleRegisterSubmit} />
      {loading && <Loader />}
    </div>
  );
}
