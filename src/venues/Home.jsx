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

  return <VenueList venues={venues} />;
}
