import Typography from "@mui/material/Typography";

export function HomeLink() {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        display: { xs: "none", md: "flex" },
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "inherit",
        textDecoration: "none",
        fontSize: "2rem",
        marginTop: "1",
        marginBottom: "1",
      }}
    >
      Holidaze
    </Typography>
  );
}
