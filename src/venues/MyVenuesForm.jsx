// MyVenues.jsx
import React from "react";
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";

const kladdVenues = [
  {
    id: 1,
    name: "Luksus suitte",
    location: "nordre gate",
    description: "Lukseriøst suitte",
  },
  {
    id: 2,
    name: "Cozy suitte",
    location: "søndre gate",
    description: "Cozy suitte",
  },
];

export function MyVenuesForm() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        My venues
      </Typography>
      <Typography variant="body1" gutterBottom>
        My venues rendered w/ img etc.
      </Typography>
      <Grid container spacing={3}>
        {kladdVenues.map((venue) => (
          <Grid item xs={12} md={6} key={venue.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{venue.name}</Typography>
                <Typography variant="body1">{venue.location}</Typography>
                <Typography variant="body1">{venue.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
