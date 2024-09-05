// CreateVenuePage.jsx
import React, { useState } from "react";
import { VenueForm } from "./VenueForm";
import { useNavigate } from "react-router-dom";
import { Loader } from "../loader/Loader";
import { useAuth, API_KEY } from "../AuthenticationProvider";

const baseUrl = "https://v2.api.noroff.dev";

export function VenueCreate() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleVenueSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await fetch(`${baseUrl}/holidaze/venues`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accessToken}`,
          "X-Noroff-API-Key": API_KEY,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Venue created!");
        // Naviger til nylige opprettet venue her senere
        navigate("/");
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
      <VenueForm onSubmit={handleVenueSubmit} onCancel={() => navigate("/")} />
      {loading && <Loader />}
    </div>
  );
}
