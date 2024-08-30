// Home (landing page).jsx
import React from "react";
import { useFetcher } from "../hooks/useFetcher";
import { VenueList } from "./VenueList";
import { Loader } from "../loader/Loader";
import { ErrorMsg } from "../error/ErrorMsg";

export function Home() {
  const {
    data: venues,
    loading,
    error,
  } = useFetcher("https://v2.api.noroff.dev/holidaze/venues");

  if (loading) return <Loader />;
  if (error) return <ErrorMsg />;

  // Render first 6 venues
  const limitedVenues = venues.slice(0, 6);
  // Venue list wrapping 6 venues
  return <VenueList venues={limitedVenues} />;
}
