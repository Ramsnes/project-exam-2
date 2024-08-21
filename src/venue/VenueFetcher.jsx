// VenueFetcher.jsx
import React from "react";
import { useFetcher } from "../hooks/useFetcher";
import { VenueList } from "./VenueList";

export function VenueFetcher() {
  const {
    data: venues,
    loading,
    error,
  } = useFetcher("https://v2.api.noroff.dev/holidaze/venues");

  if (loading) return <div className="loader"></div>;
  if (error) return <div className="error">Error: {error}</div>;

  // Render first 9 venues
  const limitedVenues = venues.slice(0, 9);

  return <VenueList venues={limitedVenues} />; // List wrapping 9 venues
}
