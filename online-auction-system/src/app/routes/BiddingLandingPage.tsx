import { Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";

export const BiddingLandingPage: React.FC = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      {/* Hero Section */}
      <section>
        <Typography variant="h1" align="center">
          Welcome to the Bidding System
        </Typography>
        <Typography variant="subtitle1" align="center">
          Join us to participate in exciting auctions and bid on your favorite
          items.
        </Typography>
      </section>
      <Grid item xs={12}>
        <Link href="/register">
          <Button
            variant="contained"
            color="primary"
            size="medium"
            fullWidth
            startIcon={<HowToRegIcon fontSize="small" />}
          >
            Register
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link href="/login">
          <Button
            variant="contained"
            color="primary"
            size="medium"
            fullWidth
            startIcon={<LoginIcon fontSize="small" />}
          >
            Login
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};
