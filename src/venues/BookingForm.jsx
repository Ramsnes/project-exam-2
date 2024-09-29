import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { fetchWrapper } from "../fetch-wrapper";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { DateRangePicker } from "./DateRangePicker";

const useCreateBooking = () => {
  return useMutation({
    mutationFn: async (data) =>
      fetchWrapper(`holidaze/bookings`, {
        method: "POST",
        body: data,
      }),
  });
};

export function BookingForm({ bookedDates, maxGuests }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();
  const { mutate } = useCreateBooking();

  const onSubmit = async (data) => {
    mutate(
      {
        guests: +data.guests,
        venueId: id,
        dateFrom: data.bookedDates.dateFrom,
        dateTo: data.bookedDates.dateTo,
      },
      {
        onSuccess: (data) => {
          navigate("/");
          toast.success("Booking successful!");
        },
        onError: () => {
          alert("Booking failed!");
        },
      }
    );
  };

  return (
    <Box
      component="div"
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 4,
        mb: 4,
        padding: "0 20px 20px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="md" className="container">
        <Helmet>
          <title>Booking details - Holidaze</title>
        </Helmet>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 4,
            mb: 4,
          }}
        >
          Booking details
        </Typography>

        <Typography
          gutterBottom
          maxWidth
          sx={{
            display: "flex",
            justifyContent: "start",
            mt: 4,
            mb: 4,
            mx: { xs: 2, sm: 4, md: 6 },
          }}
        >
          Select your check-in and check-out dates from the calendar, followed
          by the number of guests that will partake in the booking.
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Main grid  */}
          <Grid
            container
            spacing={3}
            direction={"column"}
            sx={{ alignItems: "center" }}
          >
            {/* DateRangePicker and Guests field */}
            <Grid
              item
              xs={12}
              md={8}
              lg={4}
              sx={{ maxWidth: 300, width: "100%" }}
            >
              {/* Check-in/Check-out Date Picker */}
              <Grid item xs={12} sx={{ mb: 3, width: "100%" }}>
                <DateRangePicker control={control} bookedDates={bookedDates} />
              </Grid>

              {/* Guests Field */}
              <Grid item xs={12} sx={{ width: "45%" }}>
                <TextField
                  {...register("guests", {
                    validate: {
                      required: (value) => !!value || "This field is required",
                      invalid: (value) => {
                        if (maxGuests != null && value > maxGuests) {
                          return `The number of guests exceeds the maximum limit of ${maxGuests}`;
                        }
                        return true;
                      },
                    },
                  })}
                  fullWidth
                  label="Guests"
                  type="number"
                  error={!!errors.guests}
                  helperText={errors.guests?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PeopleAltIcon
                          sx={{ color: "gray", fontSize: "20px" }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>

            {/* Buttons */}
            <Grid
              item
              xs={12}
              md={8}
              lg={4}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  justifyContent: "center",
                }}
              >
                <Button variant="contained" type="submit">
                  Book
                </Button>
                <Button
                  variant="contained"
                  type="button"
                  color="error"
                  onClick={() => navigate("/")}
                >
                  Cancel
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
}
