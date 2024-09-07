// Search.jsx
import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

export function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchInput(event.target.elements.search.value); // Sets searchInput state to form input value
  };

  // When the user submits the form, handleSearchSubmit sets the searchInput state.
  // useEffect detects changes in searchInput and calls fetchSearchResults.
  // The fetchSearchResults function fetches the data from the API, awaits the response, and updates the state with the results. */

  // API fetches when searchInput changes
  useEffect(() => {
    // Define an async function to fetch data
    const fetchSearchResults = async () => {
      if (searchInput) {
        try {
          const response = await fetch(
            `https://v2.api.noroff.dev/venues?search=${searchInput}`
          );
          const data = await response.json();
          if (data && Array.isArray(data.data)) {
            setSearchResults(data.data); // Set search results to the venues array
          } else {
            setSearchResults([]); // Reset to an empty array if error
          }
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      }
    };

    fetchSearchResults();
  }, [searchInput]); // This useEffect will trigger whenever searchInput changes

  return (
    <form onSubmit={handleSearchSubmit}>
      <Autocomplete
        freeSolo
        id="search-bar"
        options={searchResults.map((venue) => venue.name || "")}
        renderInput={(params) => (
          <TextField
            {...params}
            name="search"
            label="Search venues by name"
            variant="outlined"
          />
        )}
        sx={{ width: "100%", maxWidth: 400, minWidth: 200 }}
      />
    </form>
  );
}
