import { TextField } from "@mui/material";
import React from "react";

export function SearchBar() {
  return (
    <TextField
      name="search"
      label="Search venues by name"
      variant="outlined"
      sx={{ width: "100%", maxWidth: 300, minWidth: 200 }}
    />
  );
}
