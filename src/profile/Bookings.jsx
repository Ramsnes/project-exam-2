import { Fragment } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const formatDate = (isoString) => {
  const date = new Date(isoString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

export function Bookings({ bookings }) {
  return (
    <Fragment>
      {bookings.length > 0 && (
        <Box mt={4}>
          <Typography variant="h5" component="h2" gutterBottom>
            My Bookings
          </Typography>

          {/* Placeholder for Booking Cards or list */}
          {bookings.map((booking) => (
            <Card key={booking.id} sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6">{booking.venue.name}</Typography>
                <Typography variant="body1">
                  Date: {formatDate(booking.dateFrom)} -{" "}
                  {formatDate(booking.dateTo)}
                </Typography>
                <Typography variant="body1">
                  Guests: {booking.guests}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Fragment>
  );
}
