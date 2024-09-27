import { Fragment } from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";

export function Venues({ venues }) {
  return (
    <Fragment>
      {venues.length > 0 && (
        <Box
          mt={4}
          sx={{
            padding: "0 20px 20px",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ paddingTop: "15px" }}
          >
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
