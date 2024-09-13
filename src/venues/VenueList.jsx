// VenueList.jsx
import React from "react";
import { PlaceholderImg } from "../error/PlaceholderImg";
import { NoVenuesMsg } from "../error/NoVenuesMsg";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import { SearchBar } from "../search/Search";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

/* venues prop is given default value of empty array (venues = []). This ensures that venues is always an array and won’t throw an error. */
export function VenueList({ venues = [] }) {
  const navigate = useNavigate(); // Initialize useNavigate

  // Error msg
  if (!venues || venues.length === 0) {
    return <NoVenuesMsg />;
  }

  // Venue list render
  return (
    <Container maxWidth="md" className="container">
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "300px", // Adjust height as needed
          backgroundImage: `url('https://zpoton.com/publicdata/productdb/products/1051/images/5913_n.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      ></div>
      <Typography variant="h4" align="center" gutterBottom>
        _
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <SearchBar />
      </div>

      {/* Mapping  */}
      <Grid container spacing={4}>
        {venues.map((venue) => {
          // If img missing, placeholder
          const imageUrl =
            venue.media.length > 0 ? venue.media[0].url : PlaceholderImg();
          // If data present, show img, else venue name
          const imageAlt =
            venue.media.length > 0 ? venue.media[0].alt : venue.name;

          return (
            <Grid item key={venue.id} xs={12} sm={6} md={4}>
              <Card
                className="hoverCard"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Card click nav to id page  */}
                <CardActionArea onClick={() => navigate(`/venue/${venue.id}`)}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={imageUrl}
                    alt={imageAlt || venue.name}
                  />
                  <CardContent>
                    <Typography variant="h6" align="center">
                      {venue.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
