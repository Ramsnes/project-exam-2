import { useAuth } from "./AuthenticationProvider";
import { useQuery } from "@tanstack/react-query";
import { fetchWrapper } from "./fetch-wrapper";

export const useGetUser = () => {
  const { user } = useAuth();
  const name = user?.name;

  return useQuery({
    queryKey: ["user", name],
    queryFn: async () =>
      fetchWrapper(`holidaze/profiles/${name}?_bookings=true&_venues=true`),
    enabled: !!name,
  });
};
