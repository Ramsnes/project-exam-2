import { Fragment } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

export function Venues({ venues }) {
  return (
    <Fragment>
      {venues.length > 0 && (
        <Box mt={4}>
          <Typography variant="h5" component="h2" gutterBottom>
            My Venues
          </Typography>
          {/* Placeholder for Venue Cards or list */}
          {venues.map((venue) => (
            <Card key={venue.id} sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6">{venue.name}</Typography>
                <Typography variant="body1">{venue.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Fragment>
  );
}
