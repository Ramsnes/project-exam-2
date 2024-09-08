// BookForm.jsx
import { Container, Grid, TextField, Typography } from "@mui/material";

export function BookForm() {
  return (
    <Container maxWidth="md" className="container">
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 4,
          mb: 4,
        }}
      >
        Book venue
      </Typography>

      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} key={""}>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ display: "flex", justifyContent: "start" }}
            >
              Venue ID her
            </Typography>
            <Grid item xs={12}>
              <TextField fullWidth label="From date" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="To date" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Guests" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Venue id" />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
