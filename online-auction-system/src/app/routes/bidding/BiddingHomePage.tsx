import { Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export const BiddingHomePage: React.FC = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
        <Typography variant="h6">
            Bidding System Home page
        </Typography>
    </Grid>
  );
};
