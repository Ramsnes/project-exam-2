// VenueList.jsx
import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NoVenuesMsg } from "../error/NoVenuesMsg";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import { SearchBar } from "../search/Search";

/* venues prop is given default value of empty array (venues = []). This ensures that venues is always an array and won’t throw an error. */
export function VenueList({ venues = [] }) {
  const navigate = useNavigate();

  // Error msg
  if (!venues || venues.length === 0) {
    return <NoVenuesMsg />;
  }

  // Venue list render
  return (
    <Container maxWidth="md" style={{ marginTop: "2rem" }}>
      {/* <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Button
          onClick={() => navigate("/venues")}
          variant="contained"
          color="primary"
          sx={{ bgcolor: "orange", color: "black" }}
        >
          All Venues
        </Button>
      </div> */}

      <Typography variant="h4" align="center" gutterBottom>
        Featured Venues
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <SearchBar />
      </div>

      {/* Featured venues cards */}
      <Grid container spacing={4}>
        {venues.map((venue) => {
          // If img missing, placeholder
          const imageUrl =
            venue.media.length > 0
              ? venue.media[0].url
              : "https://via.placeholder.com/140";
          // If data present, show img, else venue name
          const imageAlt =
            venue.media.length > 0 ? venue.media[0].alt : venue.name;

          return (
            <Grid item key={venue.id} xs={12} sm={6} md={4}>
              {/* CardActionArea?  */}
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={imageUrl}
                  alt={imageAlt || venue.name}
                />
                <CardContent>
                  <Typography variant="h6" align="center">
                    {venue.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
