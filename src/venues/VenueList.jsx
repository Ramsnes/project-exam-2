// VenueList.jsx
import React from "react";
import { Container, Grid } from "@mui/material";
import { SearchBar } from "../search/Search";
import { Loader } from "../loader/Loader";
import { ErrorMsg } from "../error/ErrorMsg";
import { VenueListItem } from "./VenueListItem";
import { Banner } from "./Banner";

// TODO: Kanskje kall noe annet men jeg vet ikke hva
const Component = ({ isLoading, isError, venues }) => {
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMsg />;
  }

  if (venues.length === 0) {
    return (
      <p style={{ textAlign: "center" }}>
        No venues available for this search. Try another search query.
      </p>
    );
  }

  return (
    <Grid container spacing={4}>
      {venues.map((venue) => {
        return <VenueListItem key={venue.id} venue={venue} />;
      })}
    </Grid>
  );
};

export function VenueList({ venues = [], isLoading, isError }) {
  return (
    <Container
      maxWidth="md"
      className="container"
      sx={{
        marginTop: "11.5rem",
      }}
    >
      <Banner />
      <SearchBar />

      <Component isLoading={isLoading} isError={isError} venues={venues} />
    </Container>
  );
}
