// pages/Register.tsx
import React, { useState } from "react";
import { Box, Typography, Grid, Button, TextField } from "@mui/material";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/types";
import { registerRequest } from "../../../../store/actions/registerAuthActions";
import Toaster from "@/app/common/components/Toaster";

const RegistrationPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toasterOpen, setToasterOpen] = useState(false);

  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.auth.loading);
  const error = useSelector((state: RootState) => state.auth.error);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleToasterClose = () => {
    setToasterOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerRequest({ email, password }));
    setToasterOpen(true); // Show the toaster on successful registration
    setEmail(""); // Clear the text fields after successful registration
    setPassword("");
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography component="h1" variant="h4">
            Register
          </Typography>
        </Grid>
        <Grid item>
          <Box sx={{ mt: 3 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    autoFocus
                    required
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={handleEmailChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
              {error && <p>{error}</p>}
            </form>
            <Toaster
              message="Successfully registered!" // Message to display in the toaster
              open={toasterOpen}
              onClose={handleToasterClose}
            />
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/login">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegistrationPage;
