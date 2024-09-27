// Venues.jsx (dynamic individual products page)
// Add error imports
import React from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../loader/Loader";
import { NoVenuesMsg } from "../error/NoVenuesMsg";
import { ErrorMsg } from "../error/ErrorMsg";
import { VenueEditForm } from "./VenueEditForm";
import { useVenue } from "./use-venue-hook";

export function VenueEdit() {
  const { id } = useParams(); // Gathers id param
  const { isLoading, isError, data } = useVenue(id);

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMsg />;
  if (!data?.data) return <NoVenuesMsg />;

  return <VenueEditForm venue={data.data} />;
}
