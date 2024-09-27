import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useAuth } from "../AuthenticationProvider";
import { useQuery } from "@tanstack/react-query";
import { fetchWrapper } from "../fetch-wrapper";
import { AvatarSection } from "./AvatarSection";
import { ProfileInfo } from "./ProfileInfo";
import { Bookings } from "./Bookings";
import { Venues } from "./Venues";
import { Banner } from "./Banner";

const useGetUser = () => {
  const { user } = useAuth();
  const name = user?.name;

  return useQuery({
    queryKey: ["user", name],
    queryFn: async () =>
      fetchWrapper(`holidaze/profiles/${name}?_bookings=true&_venues=true`),
    enabled: !!name,
  });
};

export function ProfilePage() {
  const { data, isError } = useGetUser();
  const user = data?.data;

  if (!user) {
    return null;
  }

  if (isError) {
    return <Typography variant="h4">Error fetching user data</Typography>;
  }

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 4, mb: 4, padding: "0 20px" }}>
      <Helmet>
        <title>Profile - Holidaze</title>
      </Helmet>

      <Banner user={user} />

      {/* Avatar and Profile Info */}
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent={{ xs: "center", md: "flex-start" }}
        sx={{ marginBottom: 2 }}
      >
        {/* Avatar Section */}
        <AvatarSection user={user} />

        {/* Typography Section */}
        <ProfileInfo user={user} />
      </Grid>

      <Venues venues={data?.data.venues ?? []} />
      <Bookings bookings={data?.data.bookings ?? []} />
    </Box>
  );
}
