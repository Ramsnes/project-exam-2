// VenueDetails.jsx
import React from "react";
import {
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";

export function VenueDetails({ venue }) {
  // If img, get URL. If no img, placeholder
  const imageUrl =
    venue.media && venue.media.length > 0
      ? venue.media[0].url
      : "https://via.placeholder.com/300";

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={imageUrl}
          alt={
            venue.media && venue.media.length > 0
              ? venue.media[0].alt
              : venue.name
          }
        />
        {/* Name / description */}
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {venue.name}
          </Typography>
          <Typography variant="body1" paragraph>
            {" "}
            {venue.description}
          </Typography>

          <Grid container spacing={2}>
            {/* Price */}
            <Grid item xs={12} md={6}>
              <Typography variant="body2" gutterBottom>
                <strong>Price:</strong> ${venue.price}
              </Typography>
            </Grid>
            {/* Max guests  */}
            <Grid item xs={12} md={6}>
              <Typography variant="body2" gutterBottom>
                <strong>Max guests:</strong> ${venue.maxGuests}
              </Typography>
            </Grid>
            {/* Rating  */}
            <Grid item xs={12} md={6}>
              <Typography variant="body2" gutterBottom>
                <strong>Rating:</strong> {venue.rating} / 5
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
