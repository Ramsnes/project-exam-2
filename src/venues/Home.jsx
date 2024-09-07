// Home (landing page).jsx
import React, { useEffect, useState } from "react";
import { VenueList } from "./VenueList";
import { Loader } from "../loader/Loader";
import { ErrorMsg } from "../error/ErrorMsg";

export function Home() {
  const [search, setSearch] = React.useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Vi kjører");
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://v2.api.noroff.dev/holidaze/venues${
            search ? `/search?q=${search}` : ""
          }`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search]);

  if (loading) return <Loader />;
  if (error) return <ErrorMsg />;

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const search = formData.get("search");

    setSearch(search);
  };

  return (
    <form onSubmit={onSubmit}>
      <VenueList venues={data} />;
    </form>
  );
}
