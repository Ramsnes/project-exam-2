// BookForm.jsx
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { fetchWrapper } from "../fetch-wrapper";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const useCreateBooking = () => {
  return useMutation({
    mutationFn: async (data) =>
      fetchWrapper(`holidaze/bookings`, {
        method: "POST",
        body: data,
      }),
  });
};

// TODO: Husk å fjerne en del npm pakker. Husk å fikse bug hvor man nå kan booke en dato som allerede er booket.
const Date = ({ control, bookedDates }) => {
  return (
    <Controller
      name="bookedDates"
      rules={{
        validate: (value) => {
          return (
            !!(value?.dateFrom && value?.dateTo) || "This field is required"
          );
        },
      }}
      control={control}
      render={({
        field: { onChange, value, ...rest },
        fieldState: { error },
      }) => {
        const from = value?.dateFrom ? dayjs(value.dateFrom) : null;
        const to = value?.dateTo ? dayjs(value.dateTo) : null;
        return (
          <DateRangePicker
            shouldDisableDate={(date) => {
              return bookedDates.includes(date.format("YYYY-MM-DD"));
            }}
            disablePast
            localeText={{ start: "Check-in", end: "Check-out" }}
            value={[from, to]}
            onChange={(e) => {
              const first = e?.[0]?.toISOString();
              const second = e?.[1]?.toISOString();

              onChange({ dateFrom: first, dateTo: second });
            }}
            {...rest}
            slotProps={{
              textField: {
                error: !!error,
                helperText: error?.message,
                InputProps: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarTodayIcon
                        sx={{ color: "gray", fontSize: "20px" }}
                      />
                    </InputAdornment>
                  ),
                },
              },
            }}
          />
        );
      }}
    />
  );
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
          Please select your check-in and check-out dates from the calendar,
          ensuring that the dates are available. After selecting your dates,
          enter the number of guests staying at the venue (please refere to the
          respective venue's max guests limit). Once you're ready, click "Book"
          to confirm your reservation.
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {/* Main grid  */}
            <Grid container spacing={3} direction={"column"}>
              <Grid
                item
                xs={12}
                md={8}
                lg={4}
                key={""}
                sx={{ maxWidth: 300, mx: { xs: 2, sm: 4, md: 6 } }}
              >
                <Date control={control} bookedDates={bookedDates} />
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
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
                  sx={{ width: "100%", maxWidth: 300 }}
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
          </LocalizationProvider>
        </form>
      </Container>
    </Box>
  );
}
