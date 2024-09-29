import React from "react";
import { PlaceholderImg } from "../error/PlaceholderImg";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export function VenueListItem({ venue }) {
  const navigate = useNavigate();
  // If img missing, placeholder
  const imageUrl =
    venue.media.length > 0 ? venue.media[0].url : PlaceholderImg();
  // If data present, show img, else venue name
  const imageAlt = venue.media.length > 0 ? venue.media[0].alt : venue.name;

  return (
    <Grid item key={venue.id} xs={12} sm={6} md={4}>
      <Helmet>
        <title>Search venues | Holidaze</title>
      </Helmet>
      <Card
        className="hoverCard"
        sx={{
          className: "hoverCard",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxHeight: "250px",
        }}
      >
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
}
