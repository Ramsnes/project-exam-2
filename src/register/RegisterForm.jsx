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

  return (
    <Box component="div" sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={2}>
          {/* Username */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Username"
              {...register("name", {
                required: "This field is required",
                minLength: {
                  value: 5,
                  message: "Minimum lengt is 5 characters",
                },
                maxLength: {
                  value: 12,
                  message: "Maximum length is 12 characters",
                },
              })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12}>
            <TextField
              fullWidth
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

          {/* Password */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Minimum length is 8 characters",
                },
                maxLength: {
                  value: 100,
                  message: "Maximum length is 100 characters",
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Grid>

          {/* Bio */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Bio"
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

          {/* Avatar URL */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Avatar URL"
              type="url"
              {...register("avatar.url")}
              placeholder="https://example.com/avatar.jpg"
            />
          </Grid>

          {/* Avatar alt text */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Avatar Alt Text"
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

          {/* Banner URL */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Banner URL"
              type="url"
              {...register("banner.url")}
              placeholder="https://example.com/banner.jpg"
            />
          </Grid>

          {/* Banner alt text */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Banner Alt Text"
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
