import { useQuery } from "@tanstack/react-query";
import { fetchWrapper } from "../fetch-wrapper";

export const useVenue = (id) => {
  return useQuery({
    queryKey: ["venues", id],
    queryFn: async () =>
      fetchWrapper(`holidaze/venues/${id}?_owner=true&_bookings=true`),
  });
};
