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
import { Loader } from "../loader/Loader";
import { ErrorMsg } from "../error/ErrorMsg";
import { useAuth } from "../AuthenticationProvider";
import { useNavigate } from "react-router-dom";
import { PlaceholderImg } from "../error/PlaceholderImg";
import { useQuery } from "@tanstack/react-query";
import { fetchWrapper } from "../fetch-wrapper";
import { Helmet } from "react-helmet-async";

const formatDate = (date) => {
  return new Intl.DateTimeFormat("nb-NO").format(new Date(date));
};

const useMyVenues = () => {
  return useQuery({
    queryKey: ["my-venues"],
    queryFn: async () =>
      fetchWrapper("holidaze/venues?_owner=true&_bookings=true"),
  });
};

export function MyVenues() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useMyVenues();

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMsg />;

  const myVenues = data.data?.filter(
    (venue) => venue.owner.email === user?.email
  );

  const onVenueClick = (id) => navigate(`/venue/${id}`);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Helmet>
        <title>My venues | Holidaze</title>
      </Helmet>
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
        {myVenues.length > 0 ? (
          myVenues?.map((venue) => {
            // If venue has media, use the first image, otherwise use a placeholder
            const imageUrl =
              venue?.media?.length > 0 ? venue.media[0].url : PlaceholderImg();
            const imageAlt =
              venue?.media?.length > 0 ? venue.media[0].alt : venue.name;

            return (
              <Grid item xs={12} md={6} key={venue.id}>
                <Card className="hoverCard">
                  <CardActionArea onClick={() => onVenueClick(venue.id)}>
                    <CardContent>
                      <CardMedia
                        component="img"
                        height="200px"
                        image={imageUrl}
                        alt={imageAlt || venue.name}
                      />
                      <Typography variant="h6" gutterBottom>
                        {venue.name}
                      </Typography>
                      <Typography variant="body1">
                        {venue.location.address}
                      </Typography>
                      <Typography variant="body1">
                        {venue.description}
                      </Typography>

                      {/* Booking dates */}
                      {venue.bookings && venue.bookings.length > 0 ? (
                        <div style={{ marginTop: "16px" }}>
                          <Typography
                            variant="body1"
                            fontWeight={"bold"}
                            gutterBottom
                          >
                            Booked dates:
                          </Typography>

                          {venue.bookings.map((booking) => (
                            <Typography
                              key={booking.id}
                              variant="body2"
                              gutterBottom
                            >
                              From: {formatDate(booking.dateFrom)} - To:{" "}
                              {formatDate(booking.dateTo)}
                            </Typography>
                          ))}
                        </div>
                      ) : (
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          sx={{ marginTop: 2 }}
                        >
                          No bookings for this venue yet
                        </Typography>
                      )}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })
        ) : (
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            alignItems="center"
            style={{ height: "50vh" }}
          >
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
              }}
            >
              You have no venues
            </Typography>
          </Grid>
        )}
      </Grid>
      <Button
        variant="contained"
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
