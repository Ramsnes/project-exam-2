// MyVenues.jsx
import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import { useFetcher } from "../hooks/useFetcher";
import { Loader } from "../loader/Loader";
import { ErrorMsg } from "../error/ErrorMsg";
import { useAuth } from "../AuthenticationProvider";
import { useNavigate } from "react-router-dom";
import { PlaceholderImg } from "../error/PlaceholderImg";

export function MyVenues() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const {
    data: venues = [],
    loading,
    error,
  } = useFetcher("https://v2.api.noroff.dev/holidaze/venues?_owner=true");

  if (loading) return <Loader />;
  if (error) return <ErrorMsg />;

  const myVenues = venues?.filter((venue) => venue.owner.email === user.email);

  const onVenueClick = (id) => navigate(`/venue/${id}`);

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
        My venues
      </Typography>
      <Grid container spacing={3}>
        {myVenues?.map((venue) => {
          // If venue has media, use the first image, otherwise use a placeholder
          const imageUrl =
            venue.media.length > 0 ? venue.media[0].url : PlaceholderImg();
          const imageAlt =
            venue.media.length > 0 ? venue.media[0].alt : venue.name;

          return (
            <Grid item xs={12} md={6} key={venue.id}>
              <Card>
                <CardActionArea onClick={() => onVenueClick(venue.id)}>
                  <CardMedia
                    component="img"
                    height="200px"
                    image={imageUrl}
                    alt={imageAlt || venue.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{venue.name}</Typography>
                    <Typography variant="body1">
                      {venue.location.address}
                    </Typography>
                    <Typography variant="body1">{venue.description}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
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
