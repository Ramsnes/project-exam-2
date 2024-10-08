import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export function DesktopNavLinks({ handleCloseNavMenu, pages }) {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          <Link
            to={`/${page.toLowerCase()}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {page}
          </Link>
        </Button>
      ))}
    </Box>
  );
}
