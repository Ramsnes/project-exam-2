import React, { Fragment } from "react";
import { Button, Avatar, Grid } from "@mui/material";
import { UpdateAvatarModal } from "./UpdateAvatarModal";

export function AvatarSection({ user }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Fragment>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar
          src={user.avatar.url}
          alt={user.avatar.alt}
          sx={{
            width: 150,
            height: 150,
            marginRight: { md: 2 },
            mb: { xs: 2, md: 0 },
          }}
        />
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems={{ xs: "center", md: "flex-start" }}
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              width: "150px",
              mb: 2,
              marginLeft: {
                xs: "20px",
                lg: "20px",
              },
              marginTop: {
                xs: "20px",
              },
              marginBottom: {
                md: "0px",
                lg: "0px",
              },
            }}
            onClick={() => setOpen(true)}
          >
            Update avatar
          </Button>
        </Grid>
      </Grid>

      <UpdateAvatarModal
        open={open}
        handleClose={() => setOpen(false)}
        user={user}
      />
    </Fragment>
  );
}
