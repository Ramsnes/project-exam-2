// MyBookings.jsx
// Add loader
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Container,
  Button,
  CardMedia,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
// Importer Loader etter fetch implementert

const kladdBookings = [
  { id: 1, venue: "Bobse hotel", date: "16-06-24", guests: 2 },
  { id: 2, venue: "Morten hotel", date: "14-07-24", guests: 7 },
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
            <Card className="hoverCard">
              <CardContent>
                <CardMedia
                  component="img"
                  height="200px"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVHZFkYVthBGZWUT4ivwA9_z2h1Ef8ek5uIA&s"
                  alt={"alt text"}
                  sx={{ marginBottom: 2 }}
                />
                <Typography variant="h6" gutterBottom>
                  Venue name: {booking.venue}
                </Typography>

                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                  This bookings is a bustling pedestrian street in the heart of
                  Trondheim, Norway, known for its lively atmosphere, lined with
                  shops, cafes, and restaurants. It features a blend of
                  traditional and modern architecture, making it a popular spot
                  for locals and tourists to explore and relax.
                </Typography>

                <Typography variant="body2">
                  Guests: {booking.guests}
                </Typography>
                <Typography variant="body2">
                  Date of booking: {booking.date}
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
        className=" backBtn"
        sx={{
          marginTop: 2,
          "&:hover": {
            backgroundColor: "#115293",
          },
        }}
      >
        Back to venues
      </Button>
    </Container>
  );
}
