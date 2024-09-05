// LoginPage.jsx
import React, { useState } from "react";
import { LoginForm } from "./LoginForm";
import { Loader } from "../loader/Loader";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthenticationProvider";

const baseUrl = "https://v2.api.noroff.dev";

export function LoginPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleLoginSubmit = async (data) => {
    setLoading(true);

    try {
      const result = await fetch(`${baseUrl}/auth/login?_holidaze=true`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (result.ok) {
        const json = await result.json();

        setUser(json.data);
        // Bytt senere?
        alert("Login successful!");
        navigate("/");
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
