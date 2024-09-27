import Typography from "@mui/material/Typography";

export function MobileHomeLink() {
  return (
    <Typography
      variant="h5"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        display: { xs: "flex", md: "none" },
        flexGrow: 1,
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "inherit",
        textDecoration: "none",
        fontSize: {
          md: "2.5rem",
          lg: "1.5rem",
        },
        marginTop: "1",
        marginBottom: "1",
      }}
    >
      Holidaze
    </Typography>
  );
}
