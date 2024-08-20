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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <VenueList venues={venues} />; // List + venues
}
