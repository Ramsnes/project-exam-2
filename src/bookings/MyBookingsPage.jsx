import {
  Card,
  CardContent,
  Grid,
  Typography,
  Container,
  Button,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { fetchWrapper } from "../fetch-wrapper";
import { useAuth } from "../AuthenticationProvider";
import { Loader } from "../loader/Loader";
import { PlaceholderImg } from "../error/PlaceholderImg";
import { Helmet } from "react-helmet-async";

const useMyBookings = (name) => {
  return useQuery({
    queryKey: ["my-bookings", name],
    queryFn: async () =>
      fetchWrapper(`holidaze/profiles/${name}/bookings?_venue=true`),
    enabled: !!name,
  });
};

const formatDate = (data) =>
  new Intl.DateTimeFormat("nb-NO").format(new Date(data));

export function MyBookingsPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { data, isLoading, isPaused } = useMyBookings(user?.name);

  if (isLoading || isPaused) {
    return <Loader />;
  }

  const hasBookings = data?.data?.length > 0;

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

      {hasBookings ? (
        <Grid container spacing={3}>
          {data?.data?.map((booking) => {
            // If img present, render. Else placeholder
            const imageUrl =
              booking?.venue?.media?.length > 0
                ? booking.venue.media[0].url
                : PlaceholderImg();
            const imageAlt =
              booking?.venue?.media?.length > 0
                ? booking.venue.media[0].alt
                : booking.venue.name;

            const onVenueClick = (id) => navigate(`/venue/${id}`);

            return (
              <Grid item xs={12} md={6} key={booking.id}>
                <Helmet>
                  <title>My bookings - Holidaze</title>
                </Helmet>
                <Card className="hoverCard">
                  <CardActionArea
                    onClick={() => onVenueClick(booking.venue.id)}
                  >
                    <CardContent>
                      <CardMedia
                        component="img"
                        height="200px"
                        image={imageUrl}
                        alt={imageAlt}
                        sx={{ marginBottom: 2 }}
                      />
                      <Typography variant="h6">{booking.venue.name}</Typography>

                      <Typography variant="body1" sx={{ marginTop: 2 }}>
                        Date of your checkin: {formatDate(booking.dateFrom)}
                      </Typography>
                      <Typography variant="body1">
                        Date of your checkout: {formatDate(booking.dateTo)}
                      </Typography>
                      <Typography variant="body1">
                        Guests allowed: {booking.guests}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
            textAlign: "center",
          }}
        >
          There are no bookings made.
        </Typography>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/")}
        className="backBtn"
        sx={{
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        Back to venues
      </Button>
    </Container>
  );
}
