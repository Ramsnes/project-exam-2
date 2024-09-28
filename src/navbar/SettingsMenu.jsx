import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthenticationProvider";
import { useGetUser } from "../use-get-user";

function addSettings(user) {
  let settings = [];

  if (!user) {
    settings = ["Login", "Register", ...settings];
  }

  if (user) {
    settings = ["My bookings", "Logout", ...settings];
  }

  if (user?.venueManager) {
    settings = ["Create venue", "My venues", ...settings];
  }

  return settings;
}

export function SettingsMenu() {
  const { user, logOut } = useAuth();
  const { data } = useGetUser();
  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const settings = addSettings(user);
  const avatar = data?.data?.avatar;

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Options menu">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            sx={{ height: "50px", width: "50px" }}
            alt={avatar?.url}
            src={avatar?.url}
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {/* map over the 'settings' array to create menu items (register, Login, Logout) */}
        {settings.map((setting) => {
          if (setting === "Logout") {
            return (
              <MenuItem
                key={setting}
                onClick={() => {
                  navigate("/");
                  logOut();
                  handleCloseUserMenu();
                }}
              >
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            );
          }

          return (
            <MenuItem
              key={setting}
              onClick={() => handleCloseUserMenu()}
              component={Link}
              to={`/${setting.toLowerCase().replace(" ", "-")}`}
            >
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
}
