import React from "react";
import { Typography, Grid } from "@mui/material";

export function ProfileInfo({ user }) {
  return (
    <Grid
      item
      xs={12}
      md={6}
      sx={{
        textAlign: {
          xs: "center",
          sm: "center",
          md: "left",
          lg: "left",
        },
      }}
    >
      <Typography variant="h4" component="h1">
        {user.name}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {user.email}
      </Typography>
      <Typography variant="body2" mt={1}>
        {user.bio}
      </Typography>
      <Typography variant="body2" mt={1}>
        {user.venueManager ? "Venue manager 🏠" : "Not a venue manager ⛔️🏠"}
      </Typography>
    </Grid>
  );
}
