import {
  LocationOn,
  Phone,
  Email,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import { Helmet } from "react-helmet-async";

export function ContactPage() {
  return (
    <Container maxWidth="md" className="container">
      <Helmet>
        <title>Contact us - Holidaze</title>
      </Helmet>

      <Typography component="h1" variant="h4" gutterBottom>
        Contact Us
      </Typography>

      <Typography variant="body1" paragraph>
        We’re here to assist you with all your venue booking and management
        needs. Whether you're a venue manager looking to list the perfect venue
        or a customer booking a venue for yourself or your family, we ensure you
        have the best possible experience. Learn more below about the different
        roles you can register for.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Customer Support
      </Typography>
      <Typography variant="body1" paragraph>
        Registering as a customer provides you with a seamless venue booking
        experience. All listed venues are managed by venue owners, and our team
        guarantees that you, the customer, will have a great experience, both in
        terms of booking and insurance.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Venue Owners
      </Typography>
      <Typography variant="body1" paragraph>
        Registering as a venue owner allows you to rent out your venue to
        customers. Our team ensures that your venue is easily accessible to
        potential customers for booking.
      </Typography>

      <Typography variant="h5" gutterBottom>
        General Inquiries
      </Typography>
      <Typography variant="body1" paragraph>
        For general inquiries, feedback, or suggestions, feel free to reach out
        to us. We value your input and are always looking for ways to improve
        our services.
      </Typography>

      <Typography variant="h4" gutterBottom>
        How to Reach Us
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Email color="primary" sx={{ mr: 2 }} />
              <Typography variant="body1">support@holidaze.com</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Phone color="primary" sx={{ mr: 2 }} />
              <Typography variant="body1">+123-456-7890</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center" flexDirection="column">
              <LocationOn color="primary" sx={{ mr: 2 }} />
              <Typography variant="body1">
                123 Event Street, Trondheim, Norway
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 5 }}>
        <Typography variant="h6">Follow Us on Social Media</Typography>
        <Box sx={{ display: "flex", mt: 2 }}>
          <Link href="https://www.facebook.com/" target="_blank" sx={{ mr: 2 }}>
            <Facebook fontSize="large" color="primary" />
          </Link>
          <Link href="https://www.twitter.com/" target="_blank" sx={{ mr: 2 }}>
            <Twitter fontSize="large" color="primary" />
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            sx={{ mr: 2 }}
          >
            <Instagram fontSize="large" color="primary" />
          </Link>
          <Link href="https://www.linkedin.com/" target="_blank" sx={{ mr: 2 }}>
            <LinkedIn fontSize="large" color="primary" />
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
