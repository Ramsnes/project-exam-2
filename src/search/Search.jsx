import { Autocomplete, TextField } from "@mui/material";
import React from "react";

export function SearchBar() {
  return (
    <Autocomplete
      freeSolo
      id="search-bar"
      // API search here later?
      options={[]}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search venues by tag(?)"
          variant="outlined"
        />
      )}
      sx={{ width: "100%", maxWidth: 400 }} // 100% = shrink on smaller screens
    />
  );
}
