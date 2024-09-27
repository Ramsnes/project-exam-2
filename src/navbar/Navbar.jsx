import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { HomeLink } from "./HomeLink";
import { MobileMenu } from "./MobileMenu";
import { MobileHomeLink } from "./MobileHomeLink";
import { DesktopNavLinks } from "./DesktopNavLinks";
import { SettingsMenu } from "./SettingsMenu";
import { useAuth } from "../AuthenticationProvider";

export function Navbar() {
  const { user } = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = user ? ["Profile", "Contact"] : ["Contact"];

  return (
    <AppBar position="static" sx={{ height: "85px" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ height: "100%", display: "flex", alignItems: "center" }}
        >
          <HomeLink />
          <MobileMenu
            handleCloseNavMenu={handleCloseNavMenu}
            handleOpenNavMenu={handleOpenNavMenu}
            anchorElNav={anchorElNav}
            pages={pages}
          />
          <MobileHomeLink />
          <DesktopNavLinks
            handleCloseNavMenu={handleCloseNavMenu}
            pages={pages}
          />

          <SettingsMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
