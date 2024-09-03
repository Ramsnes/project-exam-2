import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Avatar,
  Paper,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

const kladdData = {
  name: "Bobbse Bobbsesen",
  email: "bobbse.thingstad@stud.noroff.no",
  bio: "Dog, biter, runner.",
  avatar: {
    url: "https://dogtime.com/wp-content/uploads/sites/12/2023/09/GettyImages-1418252093-e1695215819445.jpg?w=1024",
    alt: "Bobse's avatar",
  },
  banner: {
    url: "https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/breeds-a-z/staffordshire-terrier.jpg",
    alt: "Bobse's banner",
  },
  venueManager: true,
  _count: {
    venues: 2,
    bookings: 5,
  },
};

export function ProfilePage() {
  const navigate = useNavigate();

  const handleCreateVenue = () => {
    navigate("/create-venue");
  };

  const handleUpdateProfile = () => {
    navigate("/update-profile");
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 4, mb: 4, padding: "0 20px" }}>
      {/* Profile Banner */}
      <Paper
        sx={{
          backgroundImage: `url(${kladdData.banner.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 200,
          borderRadius: 1,
          mb: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          {/* Optional overlay or text */}
          <Typography variant="h6" component="h1" sx={{ color: "red" }}>
            Tekst over banner her
          </Typography>
        </Box>
      </Paper>

      {/* Avatar and Profile Info */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <Avatar
          src={kladdData.avatar.url}
          alt={kladdData.avatar.alt}
          sx={{ width: 100, height: 100, mr: 2 }}
        />
        <Box>
          <Typography variant="h4" component="h1">
            {kladdData.name}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {kladdData.email}
          </Typography>
          <Typography variant="body2" mt={1}>
            {kladdData.bio}
          </Typography>
          <Typography variant="body2" mt={1}>
            {kladdData.venueManager
              ? "Venue manager 🏠"
              : "Not a venue manager ⛔️🏠"}
          </Typography>
        </Box>
      </Box>

      {/* Action Buttons */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleCreateVenue}
            sx={{ mb: 2 }}
          >
            (Fjern?) Create a New Venue if Venue manager
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleUpdateProfile}
          >
            Update Profile
          </Button>
        </Grid>
      </Grid>

      {/* Profile Statistics (venues og bookings) */}
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Venues</Typography>
              <Typography variant="body1">{kladdData._count.venues}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Bookings</Typography>
              <Typography variant="body1">
                {kladdData._count.bookings}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Optional Sections for Venues and Bookings */}
      {/* Replace with dynamically list the user's venues and bookings if available */}
      {/* Venues */}
      {kladdData._count.venues > 0 && (
        <Box mt={4}>
          <Typography variant="h5" component="h2" gutterBottom>
            My Venues
          </Typography>
          {/* Placeholder for Venue Cards or list */}
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6">Venue Name</Typography>
              <Typography variant="body1">
                Venue description goes here.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      )}

      {/* Bookings */}
      {kladdData._count.bookings > 0 && (
        <Box mt={4}>
          <Typography variant="h5" component="h2" gutterBottom>
            My Bookings
          </Typography>
          {/* Placeholder for Booking Cards or list */}
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6">Booking ID</Typography>
              <Typography variant="body1">Booking details go here.</Typography>
            </CardContent>
          </Card>
        </Box>
      )}
    </Box>
  );
}
