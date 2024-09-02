// ProfilePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";

export function ProfilePage() {
  const navigate = useNavigate();

  const handleCreateVenue = () => {
    navigate("/create-venue");
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4, mb: 4, padding: "0 20px" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Your Profile
      </Typography>
      {/* Add profile details here */}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleCreateVenue}
        sx={{ mt: 2 }}
      >
        Create a New Venue
      </Button>
    </Box>
  );
}
