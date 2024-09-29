import { BookingForm } from "./BookingForm";
import { useParams } from "react-router-dom";
import { useVenue } from "./use-venue-hook";
import dayjs from "dayjs";

function getBookedDates(bookings) {
  const bookedDates = [];

  bookings.forEach((booking) => {
    let currentDate = dayjs(booking.dateFrom);
    const endDate = dayjs(booking.dateTo);

    while (
      currentDate.isBefore(endDate) ||
      currentDate.isSame(endDate, "day")
    ) {
      bookedDates.push(currentDate.format("YYYY-MM-DD"));
      currentDate = currentDate.add(1, "day");
    }
  });

  return Array.from(new Set(bookedDates));
}

export function Booking() {
  const { id } = useParams();
  const { isLoading, data } = useVenue(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data?.data) {
    return <p>Could not find a venue on this id</p>;
  }

  const bookedDates = getBookedDates(data.data.bookings ?? []);

  return (
    <BookingForm bookedDates={bookedDates} maxGuests={data?.data?.maxGuests} />
  );
}
