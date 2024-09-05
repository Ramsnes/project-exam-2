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

export function VenueForm({ onSubmit, onCancel, submitText, venue }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: venue?.name || "",
      description: venue?.description || "",
      price: venue?.price || undefined,
      maxGuests: venue?.maxGuests || undefined,
      mediaUrl: venue?.media?.[0]?.url || "",
      mediaAlt: venue?.media?.[0]?.alt || "",
      address: venue?.location?.address || "",
      city: venue?.location?.city || "",
      zip: venue?.location?.zip || "",
      country: venue?.location?.country || "",
      continent: venue?.location?.continent || "",
      lat: venue?.location?.lat || undefined,
      lng: venue?.location?.lng || undefined,
      wifi: venue?.meta?.wifi || false,
      parking: venue?.meta?.parking || false,
      breakfast: venue?.meta?.breakfast || false,
      pets: venue?.meta?.pets || false,
    },
  });

  console.log(venue);

  const handleFormSubmit = (data) => {
    // Clean data
    const isMedia = !!data.mediaUrl && !!data.mediaAlt;
    const cleanedData = {
      name: data.name.trim(),
      description: data.description.trim(),
      price: data.price ? +data.price : 0,
      maxGuests: data.maxGuests ? +data.maxGuests : 0,
      media: isMedia ? [{ url: data.mediaUrl, alt: data.mediaAlt }] : undefined,
      location: {
        address: data.address.trim(),
        city: data.city.trim(),
        zip: data.zip.trim(),
        country: data.country.trim(),
        continent: data.continent.trim(),
        lat: data.lat ? +data.lat : 0,
        lng: data.lng ? +data.lng : 0,
      },
      meta: {
        wifi: !!data.wifi,
        parking: !!data.parking,
        breakfast: !!data.breakfast,
        pets: !!data.pets,
      },
    };
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
              {...register("mediaUrl", {
                pattern: {
                  value: /^https?:\/\/.+/,
                  message: "Enter a valid URL",
                },
              })}
              placeholder="https://example.com/image.jpg"
              error={!!errors.media?.url}
              helperText={errors.media?.url?.message}
            />
          </Grid>

          {/* Media Alt Text - optional */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Media URL description"
              {...register("mediaAlt")}
              placeholder="Image description"
              error={!!errors.media?.alt}
              helperText={errors.media?.alt?.message}
            />
          </Grid>

          {/* Location Fields */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              {...register("address")}
              placeholder="123 Venue St."
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="City"
              {...register("city")}
              placeholder="City"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Zip"
              {...register("zip")}
              placeholder="Postal Code"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Country"
              {...register("country")}
              placeholder="Country"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Continent"
              {...register("continent")}
              placeholder="Continent"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Latitude"
              type="number"
              {...register("lat", {
                valueAsNumber: true,
                min: {
                  value: -90,
                  message: "Value cant be less than -90",
                },
                max: {
                  value: 90,
                  message: "Value cant be more than 90",
                },
              })}
              placeholder="Latitude"
              error={!!errors.location?.lat}
              helperText={errors.location?.lat?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Longitude"
              type="number"
              {...register("lng", {
                valueAsNumber: true,
                min: {
                  value: -180,
                  message: "Value cant be less than -180",
                },
                max: {
                  value: 180,
                  message: "Value cant be more than 180",
                },
              })}
              placeholder="Longitude"
              error={!!errors.location?.lng}
              helperText={errors.location?.lng?.message}
            />
          </Grid>

          {/* Meta Fields */}
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox {...register("wifi")} />}
              label="WiFi"
            />
            <FormControlLabel
              control={<Checkbox {...register("parking")} />}
              label="Parking"
            />
            <FormControlLabel
              control={<Checkbox {...register("breakfast")} />}
              label="Breakfast"
            />
            <FormControlLabel
              control={<Checkbox {...register("pets")} />}
              label="Pets allowed"
            />
          </Grid>

          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              marginLeft: "15px",
              marginTop: "15px",
              maxWidth: "fit-content",
            }}
          >
            <Button fullWidth type="submit" variant="contained" color="primary">
              {submitText ?? "Create venue"}
            </Button>
            <Button
              type="button"
              variant="contained"
              color="error"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </Box>
        </Grid>
      </form>
    </Box>
  );
}
