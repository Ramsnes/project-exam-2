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
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        We’re here to help you with all your venue booking and management needs.
        Whether you're looking to book the perfect location for your next event
        or interested in listing your venue on our platform, our team is ready
        to assist you every step of the way.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Customer Support
      </Typography>
      <Typography variant="body1" paragraph>
        Our dedicated customer support team is available to answer any questions
        you may have about our venues, booking process, or any other inquiries.
        We strive to provide prompt and comprehensive responses to ensure you
        have a smooth and enjoyable experience with us.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Venue Owners
      </Typography>
      <Typography variant="body1" paragraph>
        If you are a venue owner looking to list your space on our platform, we
        offer tailored support to help you set up your listing. We understand
        the importance of showcasing your venue’s unique features, and we’re
        here to guide you through the process, from creating your listing to
        managing bookings efficiently.
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
            <Box display="flex" alignItems="center">
              <Email color="primary" sx={{ mr: 2 }} />
              <Typography variant="body1">support@holidaze.com</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center">
              <Phone color="primary" sx={{ mr: 2 }} />
              <Typography variant="body1">+123-456-7890</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center">
              <LocationOn color="primary" sx={{ mr: 2 }} />
              <Typography variant="body1">
                123 Event Street, Trondheim, Norway
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 5 }}>
        <Typography variant="h6">Follow us on Social Media</Typography>
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

      <Typography variant="body1" paragraph sx={{ mt: 5 }}>
        Feel free to stop by our office during business hours: Monday to Friday,
        9:00 AM - 5:00 PM.
      </Typography>
    </Container>
  );
}
