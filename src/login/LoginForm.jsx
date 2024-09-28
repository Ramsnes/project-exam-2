// LoginForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Typography, Box, Grid } from "@mui/material";
import { Helmet } from "react-helmet-async";

export function LoginForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <Box
      component="div"
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 4,
        padding: "0 20px 20px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Helmet>
        <title>Login - Holidaze</title>
      </Helmet>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ display: "flex", justifyContent: "center" }}
      >
        Login
      </Typography>
      <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
        <Grid container spacing={2}>
          {/* Email - required */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email*"
              {...register("email", {
                validate: {
                  valid: (value) => {
                    if (!value) {
                      return "This field is required";
                    }
                    if (!value.includes("@")) {
                      return "Please enter your valid email containing '@stud.noroff.no'";
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
              fullWidth
              label="Password*"
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
                    return true;
                  },
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Grid>

          {/* Submit button */}
          <Grid item xs={12}>
            <Button fullWidth type="submit" variant="contained" color="primary">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
