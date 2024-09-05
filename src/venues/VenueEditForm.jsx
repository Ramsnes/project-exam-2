import { VenueForm } from "./VenueForm";
import { Loader } from "../loader/Loader";
import React, { useState } from "react";
import { useAuth, API_KEY } from "../AuthenticationProvider";
import { useNavigate } from "react-router-dom";

const baseUrl = "https://v2.api.noroff.dev";

export function VenueEditForm({ venue }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleVenueUpdate = async (data) => {
    setLoading(true);

    try {
      const response = await fetch(`${baseUrl}/holidaze/venues/${venue.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accessToken}`,
          "X-Noroff-API-Key": API_KEY,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Venue successfully edited!");
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
      <VenueForm
        venue={venue}
        onSubmit={handleVenueUpdate}
        submitText="Update Venue"
        onCancel={() => navigate("/")}
      />
      {loading && <Loader />}
    </div>
  );
}
