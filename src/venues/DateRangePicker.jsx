// BookForm.jsx
import { InputAdornment } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { Controller } from "react-hook-form";
import dayjs from "dayjs";
import { DateRangePicker as MUIDateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";

// TODO: Husk å fjerne en del npm pakker. Husk å fikse bug hvor man nå kan booke en dato som allerede er booket.

function isDateRangeAvailable(bookedDates, selectedStart, selectedEnd) {
  // Parse the start and end dates using dayjs
  const startDate = dayjs(selectedStart); // "2024-09-27T22:00:00.000Z"
  const endDate = dayjs(selectedEnd); // "2024-10-13T22:00:00.000Z"

  // Loop through the bookedDates array
  for (let booked of bookedDates) {
    const bookedDate = dayjs(booked); // Parse each booked date

    // Check if the bookedDate falls within the selected date range
    if (bookedDate.isBetween(startDate, endDate, "day", "[]")) {
      // If any booked date is within the range, return false
      return false;
    }
  }

  // If no booked dates are found in the range, return true
  return true;
}

export const DateRangePicker = ({ control, bookedDates }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name="bookedDates"
        rules={{
          validate: (value) => {
            if (!value.dateFrom || !value.dateTo) {
              return "This field is required";
            }

            if (
              !isDateRangeAvailable(bookedDates, value.dateFrom, value.dateTo)
            ) {
              return "There are some booked dates in this range";
            }

            return true;
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
            <MUIDateRangePicker
              shouldDisableDate={(date) =>
                bookedDates.includes(date.format("YYYY-MM-DD"))
              }
              disablePast
              localeText={{ start: "Check-in", end: "Check-out" }}
              value={[from, to]}
              onChange={(e) => {
                const first = e?.[0]?.toISOString();
                const second = e?.[1]?.toISOString();

                console.log(first, second);
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
    </LocalizationProvider>
  );
};
