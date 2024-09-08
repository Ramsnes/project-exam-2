// MyBookingsForm.jsx
// Add loader
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Container,
  Button,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const kladdBookings = [
  { id: 1, venue: "Bobse hotel", date: "1234-23-12", guests: 2 },
  { id: 2, venue: "Morten hotel", date: "5565-56-67", guests: 7 },
];

export function BookingsForm() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 4,
          mb: 4,
        }}
      >
        My bookings
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
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/")}
        sx={{ marginTop: 2 }}
      >
        Back to venues
      </Button>
    </Container>
  );
}
