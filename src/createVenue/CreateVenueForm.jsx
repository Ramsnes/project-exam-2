// CreateVenueForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
  Grid,
} from "@mui/material";

export function CreateVenueForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    // Clean data
    const cleanedData = { ...data };
    console.log("Data being submitted:", cleanedData);
    onSubmit(cleanedData);
  };

  // Form
  return (
    <Box
      component="div"
      sx={{ maxWidth: 500, mx: "auto", mt: 4, mb: 4, padding: "0 20px" }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ display: "flex", justifyContent: "center", mt: 4, mb: 4 }}
      >
        Create Venue
      </Typography>

      <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
        <Grid container spacing={2}>
          {/* Venue name - required */}
          <Grid item xs={12}>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ display: "flex", justifyContent: "start" }}
            >
              Required fields
            </Typography>
            <TextField
              fullWidth
              label="Venue name"
              {...register("name", {
                required: "This field is required",
              })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Grid>

          {/* Description - required */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              multiline
              rows={4}
              {...register("description", {
                required: "This field is required",
              })}
              error={!!errors.description}
              helperText={errors.description?.message}
            />
          </Grid>

          {/* Price - required */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Price per night"
              type="number"
              {...register("price", {
                required: "This field is required",
                min: {
                  value: 0,
                  message: "Price cannot be negative",
                },
              })}
              error={!!errors.price}
              helperText={errors.price?.message}
            />
          </Grid>

          {/* Max Guests - required */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Max Guests"
              type="number"
              {...register("maxGuests", {
                required: "This field is required",
                min: {
                  value: 1,
                  message: "Must allow at least 1 guest",
                },
              })}
              error={!!errors.maxGuests}
              helperText={errors.maxGuests?.message}
            />
          </Grid>

          {/* Media URL - optional */}
          <Grid item xs={12}>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ display: "flex", justifyContent: "start" }}
            >
              Optional fields
            </Typography>
            <TextField
              fullWidth
              label="Media URL"
              {...register("media[0].url", {
                pattern: {
                  value: /^https?:\/\/.+/,
                  message: "Enter a valid URL",
                },
              })}
              placeholder="https://example.com/image.jpg"
              error={!!errors.media?.[0]?.url}
              helperText={errors.media?.[0]?.url?.message}
            />
          </Grid>

          {/* Media Alt Text - optional */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Media URL description"
              {...register("media[0].alt")}
              placeholder="Image description"
              error={!!errors.media?.[0]?.alt}
              helperText={errors.media?.[0]?.alt?.message}
            />
          </Grid>

          {/* Location Fields */}
          <Grid item xs={12}>
            {/* <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ display: "flex", justifyContent: "start" }}
            >
              Location details (optional)
            </Typography> */}
            <TextField
              fullWidth
              label="Address"
              {...register("location.address")}
              placeholder="123 Venue St."
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="City"
              {...register("location.city")}
              placeholder="City"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Zip"
              {...register("location.zip")}
              placeholder="Postal Code"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Country"
              {...register("location.country")}
              placeholder="Country"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Continent"
              {...register("location.continent")}
              placeholder="Continent"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Latitude"
              type="number"
              {...register("location.lat", {
                valueAsNumber: true,
              })}
              placeholder="Latitude"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Longitude"
              type="number"
              {...register("location.lng", {
                valueAsNumber: true,
              })}
              placeholder="Longitude"
            />
          </Grid>

          {/* Meta Fields */}
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox {...register("meta.wifi")} />}
              label="WiFi"
            />
            <FormControlLabel
              control={<Checkbox {...register("meta.parking")} />}
              label="Parking"
            />
            <FormControlLabel
              control={<Checkbox {...register("meta.breakfast")} />}
              label="Breakfast"
            />
            <FormControlLabel
              control={<Checkbox {...register("meta.pets")} />}
              label="Pets allowed"
            />
          </Grid>

          {/* Submit button */}
          <Grid item xs={12}>
            <Button fullWidth type="submit" variant="contained" color="primary">
              Create Venue
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
