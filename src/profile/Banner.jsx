import { Box, Typography, Paper } from "@mui/material";

export function Banner({ user }) {
  return (
    <Paper
      sx={{
        backgroundImage: `url(${user.banner.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: 200,
        borderRadius: 1,
        mb: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {/* Optional overlay or text */}
        <Typography variant="h6" component="h1"></Typography>
      </Box>
    </Paper>
  );
}
