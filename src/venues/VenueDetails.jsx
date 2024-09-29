// VenueDetails.jsx
import React, { Fragment } from "react";
import { PlaceholderImg } from "../error/PlaceholderImg";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PetsIcon from "@mui/icons-material/Pets";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import StarIcon from "@mui/icons-material/Star";
import SignpostIcon from "@mui/icons-material/Signpost";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LanguageIcon from "@mui/icons-material/Language";
import PublicIcon from "@mui/icons-material/Public";
import toast from "react-hot-toast";

import {
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthenticationProvider";
import { useMutation } from "@tanstack/react-query";
import { fetchWrapper } from "../fetch-wrapper";
import { Helmet } from "react-helmet-async";

const useDeleteVenue = (id) => {
  return useMutation({
    mutationFn: async () =>
      fetchWrapper(`holidaze/venues/${id}`, { method: "DELETE" }),
  });
};

export function VenueDetails({ venue }) {
  // Navigation hook
  const navigate = useNavigate();
  const { user } = useAuth();
  const { mutate } = useDeleteVenue(venue.id);

  // If img, get URL. If no img, placeholder
  const imageUrl =
    venue.media && venue.media.length > 0
      ? venue.media[0].url
      : PlaceholderImg();

  // Fn to display boolean as "Yes" or "No"
  const formatBoolean = (value) => (value ? "Yes" : "No");
  const isOwn = venue.owner?.email === user?.email;

  const onDelete = async () =>
    mutate(undefined, {
      onSuccess: () => {
        navigate("/");
        toast.success("Venue deleted!");
      },
      onError: () => {
        alert("An error occurred");
      },
    });

  return (
    // Main container
    <Container maxWidth="md" className="container">
      <Helmet>
        <title>{venue.name} - Holidaze</title>
      </Helmet>
      {/* Main card container  */}
      <Card variant="outlined">
        {/* Displays image */}
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
        {/* Displays image end */}
        {/* Card content */}
        <CardContent>
          {/* Venue Name and Description */}
          <Typography variant="h3" gutterBottom>
            {venue.name}
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 3 }}>
            {venue.description}
          </Typography>

          {/* Venue Information */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" gutterBottom>
              Venue Information
            </Typography>
            <Grid container spacing={2}>
              {/* Price */}
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <AttachMoneyIcon sx={{ mr: 1 }} />
                  <Typography variant="body2" gutterBottom>
                    <strong>Price:</strong> ${venue.price}
                  </Typography>
                </Box>
              </Grid>
              {/* Max Guests */}
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <PeopleAltIcon sx={{ mr: 1 }} />
                  <Typography variant="body2" gutterBottom>
                    <strong>Max Guests:</strong> {venue.maxGuests}
                  </Typography>
                </Box>
              </Grid>
              {/* Rating */}
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <StarIcon sx={{ mr: 1 }} />
                  <Typography variant="body2" gutterBottom>
                    <strong>Rating:</strong> {venue.rating} / 5
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Location Information */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" gutterBottom>
              Location Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <SignpostIcon sx={{ mr: 1 }} />
                  <Typography variant="body2" gutterBottom>
                    <strong>Address:</strong> {venue.location.address}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LocationCityIcon sx={{ mr: 1 }} />
                  <Typography variant="body2" gutterBottom>
                    <strong>City:</strong> {venue.location.city}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LanguageIcon sx={{ mr: 1 }} />
                  <Typography variant="body2" gutterBottom>
                    <strong>Country:</strong> {venue.location.country}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <PublicIcon sx={{ mr: 1 }} />
                  <Typography variant="body2" gutterBottom>
                    <strong>Continent:</strong> {venue.location.continent}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Other Information */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" gutterBottom>
              Other Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <WifiIcon sx={{ mr: 1 }} />
                  <Typography variant="body2" gutterBottom>
                    <strong>Wifi:</strong> {formatBoolean(venue.meta.wifi)}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LocalParkingIcon sx={{ mr: 1 }} />
                  <Typography variant="body2" gutterBottom>
                    <strong>Parking:</strong>{" "}
                    {formatBoolean(venue.meta.parking)}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <RestaurantIcon sx={{ mr: 1 }} />
                  <Typography variant="body2" gutterBottom>
                    <strong>Restaurant:</strong>{" "}
                    {formatBoolean(venue.meta.restaurant)}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <PetsIcon sx={{ mr: 1 }} />
                  <Typography variant="body2" gutterBottom>
                    <strong>Pets Allowed:</strong>{" "}
                    {formatBoolean(venue.meta.pets)}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              className="backBtn"
              color="primary"
              onClick={() => navigate("/")}
            >
              Back to venues
            </Button>

            {isOwn ? (
              <Fragment>
                <Button
                  variant="contained"
                  onClick={() => navigate(`/venue/${venue.id}/edit`)}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => onDelete()}
                >
                  Delete
                </Button>
              </Fragment>
            ) : (
              <Fragment>
                {user && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(`/venue/${venue.id}/booking`)}
                  >
                    Book venue
                  </Button>
                )}
              </Fragment>
            )}
          </Box>
          {/* Card content end */}
        </CardContent>
        {/* Main card container end */}
      </Card>
      {/* Main container end */}
    </Container>
  );
}
