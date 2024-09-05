// Venues.jsx (dynamic individual products page)
// Add error imports
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Loader } from "../loader/Loader";
import { NoVenuesMsg } from "../error/NoVenuesMsg";
import { ErrorMsg } from "../error/ErrorMsg";
import { VenueEditForm } from "./VenueEditForm";

export function VenueEdit() {
  const { id } = useParams(); // Gathers id param
  const [venue, setVenue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchVenue = async () => {
      try {
        const response = await fetch(
          `https://v2.api.noroff.dev/holidaze/venues/${id}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();

        setVenue(result.data);
      } catch (error) {
        console.error("Fetching error:", error);

        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchVenue();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMsg />;
  if (!venue) return <NoVenuesMsg />;

  return <VenueEditForm venue={venue} />;
}
