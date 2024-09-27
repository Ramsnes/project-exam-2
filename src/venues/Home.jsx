// Home (landing page).jsx
import React from "react";
import { VenueList } from "./VenueList";
import { useQuery } from "@tanstack/react-query";
import { fetchWrapper } from "../fetch-wrapper";

const useVenues = (search) => {
  return useQuery({
    queryKey: ["venues", search],
    queryFn: async () =>
      fetchWrapper(`holidaze/venues/${search ? `search?q=${search}` : ""}`),
    keepPreviousData: true,
    staleTime: 1000 * 60 * 2,
  });
};

export function Home() {
  const [search, setSearch] = React.useState("");
  const { data, isLoading, isError } = useVenues(search);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const search = formData.get("search");

    setSearch(search);
  };

  return (
    <form onSubmit={onSubmit}>
      <VenueList venues={data?.data} isLoading={isLoading} isError={isError} />
    </form>
  );
}
