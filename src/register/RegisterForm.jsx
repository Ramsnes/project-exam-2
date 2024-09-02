//  RegisterForm.jsx
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

export function RegisterForm({ onSubmit }) {
  // handleSubmit receives the form data if validation is succs.
  // register registers input by creating a ref
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Logs data sent
  // Ensures avatar/banner fields aren't sent if empty, and alt fields aren't sent if respective URL-fields are empty when alt fields are filled
  const handleFormSubmit = (data) => {
    // Creates a new object to store the cleaned form data
    const cleanedData = { ...data };

    // Handle avatar field
    if (!cleanedData.avatar?.url) {
      delete cleanedData.avatar; // Remove the avatar field entirely if the url is empty
    } else if (!cleanedData.avatar.alt) {
      delete cleanedData.avatar.alt; // Remove alt if only url is provided
    }

    // Handle banner field
    if (!cleanedData.banner?.url) {
      delete cleanedData.banner; // Remove the banner field entirely if the url is empty
    } else if (!cleanedData.banner.alt) {
      delete cleanedData.banner.alt; // Remove alt if only url is provided
    }

    console.log("Data being submitted:", cleanedData);
    onSubmit(cleanedData);
  };

  return (
    <Box
      component="div"
      sx={{ maxWidth: 500, mx: "auto", mt: 4, mb: 4, padding: "0 20px" }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ display: "flex", justifyContent: "center" }}
      >
        Register
      </Typography>
      <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
        {" "}
        <Grid container spacing={2}>
          {/* Username - required */}
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Username"
              {...register("name", {
                validate: {
                  valid: (value) => {
                    if (!value) {
                      return "This field is required";
                    }
                    if (value.length < 5) {
                      return "Minimum length is 5 characters";
                    }
                    if (value.length > 12) {
                      return "Maximum length is 12 characters";
                    }
                    return true;
                  },
                },
              })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Grid>

          {/* Email - required */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Email"
              {...register("email", {
                validate: {
                  valid: (value) => {
                    if (!value) {
                      return "This field is required";
                    }
                    if (!value.includes("@stud.noroff.no")) {
                      return "Only students with a @stud.noroff.no email may register";
                    }
                    return true;
                  },
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>

          {/* Password - required */}
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Password"
              type="password"
              {...register("password", {
                validate: {
                  valid: (value) => {
                    if (!value) {
                      return "This field is required";
                    }
                    if (value.length < 8) {
                      return "Minimum length is 8 characters";
                    }
                    if (value.length > 20) {
                      return "Maximum length is 20 characters";
                    }
                    return true;
                  },
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Grid>

          {/* Bio - optional */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Bio (optional)"
              multiline
              rows={4}
              {...register("bio", {
                maxLength: {
                  value: 150,
                  message: "Maximum length is 150 characters",
                },
              })}
              placeholder="Tell us about yourself"
              error={!!errors.bio}
              helperText={errors.bio?.message}
            />
          </Grid>

          {/* Avatar URL - optional */}
          {/* Create placeholder avatar?  */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Avatar URL (optional)"
              type="url"
              {...register("avatar.url", {
                validate: {
                  valid: (value) => {
                    if (value && !value.startsWith("https://")) {
                      return "Please include 'https://' at the base of URL";
                    }
                    return true;
                  },
                },
              })}
              placeholder="https://example.com/avatar.jpg"
              error={!!errors.avatar?.url}
              helperText={errors.avatar?.url?.message}
            />
          </Grid>

          {/* Avatar alt text - optional */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Avatar Alt Text (optional)"
              {...register("avatar.alt", {
                maxLength: {
                  value: 100,
                  message: "Maximum length is 100 characters",
                },
              })}
              placeholder="Avatar description"
              error={!!errors.avatar?.alt}
              helperText={errors.avatar?.alt?.message}
            />
          </Grid>

          {/* Banner URL - optional*/}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Banner URL (optional)"
              type="url"
              {...register("banner.url", {
                validate: {
                  valid: (value) => {
                    if (value && !value.startsWith("https://")) {
                      return "Please include 'https://' at the base of URL";
                    }
                  },
                },
              })}
              placeholder="https://example.com/banner.jpg"
              error={!!errors.banner?.url}
              helperText={errors.banner?.url?.message}
            />
          </Grid>

          {/* Banner alt text - Optional*/}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Banner Alt Text (optional)"
              {...register("banner.alt", {
                maxLength: {
                  value: 100,
                  message: "Maximum length is 100 characters",
                },
              })}
              placeholder="Banner image description"
              error={!!errors.banner?.alt}
              helperText={errors.banner?.alt?.message}
            />
          </Grid>

          {/* Venue manager */}
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox {...register("venueManager")} />}
              label="Venue manager?"
            />
          </Grid>

          {/* Submit button */}
          <Grid item xs={12}>
            <Button fullWidth type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
