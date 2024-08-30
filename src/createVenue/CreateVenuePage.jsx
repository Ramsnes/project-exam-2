// CreateVenuePage.jsx
import React, { useState } from "react";
import { CreateVenueForm } from "./CreateVenueForm";
import { useNavigate } from "react-router-dom";
import { Loader } from "../loader/Loader";

const baseUrl = "https://v2.api.noroff.dev";

export function CreateVenuePage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleVenueSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await fetch(`${baseUrl}/holidaze/venues`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Venue created!");
        // Naviger til nylige opprettet venue her senere
        navigate("/");
      }

      const result = await response.json();
      console.log("Venue created:", result);
    } catch (error) {
      alert("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <CreateVenueForm onSubmit={handleVenueSubmit} />
      {loading && <Loader />}
    </div>
  );
}
