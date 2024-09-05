// VenueList.jsx
import React from "react";
import { PlaceholderImg } from "../error/PlaceholderImg";
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
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

/* venues prop is given default value of empty array (venues = []). This ensures that venues is always an array and won’t throw an error. */
export function VenueList({ venues = [] }) {
  const navigate = useNavigate(); // Initialize useNavigate

  // Error msg
  if (!venues || venues.length === 0) {
    return <NoVenuesMsg />;
  }

  // Venue list render
  return (
    <Container maxWidth="md" className="container">
      <Typography variant="h4" align="center" gutterBottom>
        Venues
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

      {/* Mapping  */}
      <Grid container spacing={4}>
        {venues.map((venue) => {
          // If img missing, placeholder
          const imageUrl =
            venue.media.length > 0 ? venue.media[0].url : PlaceholderImg();
          // If data present, show img, else venue name
          const imageAlt =
            venue.media.length > 0 ? venue.media[0].alt : venue.name;

          return (
            <Grid item key={venue.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                {/* Card click nav to id page  */}
                <CardActionArea onClick={() => navigate(`/venue/${venue.id}`)}>
                  <CardMedia
                    component="img"
                    height="200px"
                    image={imageUrl}
                    alt={imageAlt || venue.name}
                  />
                  <CardContent>
                    <Typography variant="h6" align="center">
                      {venue.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
