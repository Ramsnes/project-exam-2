import { TextField } from "@mui/material";
import React from "react";

export function SearchBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "2rem",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "8px",
          borderRadius: "10px",
          width: "300px",
        }}
      >
        <TextField
          name="search"
          label="Search venues"
          variant="outlined"
          sx={{
            width: "100%",
            minWidth: 200,
            backgroundColor: "white",
            borderRadius: "10px",
            borderColor: "white",
          }}
        />
      </div>
    </div>
  );
}
