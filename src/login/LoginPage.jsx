// LoginPage.jsx
import React, { useState } from "react";
import { LoginForm } from "./LoginForm";
import { Loader } from "../loader/Loader";
import { useNavigate } from "react-router-dom";

const baseUrl = "https://v2.api.noroff.dev";

export function LoginPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoginSubmit = async (data) => {
    setLoading(true);

    try {
      const result = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (result.ok) {
        navigate("/home");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      alert("An error ocurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleLoginSubmit} />
      {loading && <Loader />}
    </div>
  );
}
