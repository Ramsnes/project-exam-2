// AllVenuesPage.jsx
import React from "react";
import { useFetcher } from "../hooks/useFetcher";
import { VenueList } from "./VenueList";
import { Loader } from "../loader/Loader";
import { ErrorMsg } from "../error/ErrorMsg";

export function AllVenues() {
  const {
    data: venues,
    loading,
    error,
  } = useFetcher("https://v2.api.noroff.dev/holidaze/venues");

  if (loading) return <Loader />;
  if (error) return <ErrorMsg />;

  return (
    <div>
      <h1>All venues</h1>
      <VenueList venues={venues} />
    </div>
  );
}
