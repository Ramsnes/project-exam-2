// MyBookings.jsx
import { Card, CardContent, Grid, Typography, Container } from "@mui/material";
import React from "react";

const kladdBookings = [
  { id: 1, venue: "Bobse hotel", date: "1234-23-12", guests: 2 },
  { id: 1, venue: "Morten hotel", date: "5565-56-67", guests: 7 },
];

export function BookingsForm() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        My bookings
      </Typography>
      <Typography variant="body1" gutterBottom>
        My bookings rendered w/ img etc.
      </Typography>
      <Grid container spacing={3}>
        {kladdBookings.map((booking) => (
          <Grid item xs={12} md={6} key={booking.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  Venue name: {booking.venue}
                </Typography>
                <Typography variant="body1">
                  Date of booking: {booking.date}
                </Typography>
                <Typography variant="body1">
                  Guests: {booking.guests}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
