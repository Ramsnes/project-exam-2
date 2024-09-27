import React from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../loader/Loader";
import { NoVenuesMsg } from "../error/NoVenuesMsg";
import { ErrorMsg } from "../error/ErrorMsg";
import { VenueDetails } from "./VenueDetails";
import { useVenue } from "./use-venue-hook";

export function Venue() {
  const { id } = useParams();
  const { isLoading, isError, data } = useVenue(id);

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMsg />;
  if (!data?.data) return <NoVenuesMsg />;

  return <VenueDetails venue={data.data} />;
}
