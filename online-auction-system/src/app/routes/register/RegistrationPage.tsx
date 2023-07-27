import React, { useState } from "react";
import { Box, Typography, Grid, Button, TextField } from "@mui/material";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/types";
import { registerRequest } from "../../../../store/actions/registerAuthActions";
import Toaster from "@/app/common/components/Toaster";
import HowToRegIcon from "@mui/icons-material/HowToReg";

const RegistrationPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [toasterOpen, setToasterOpen] = useState(false);

  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.registerAuth.error);

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
    // Reset previous error messages
    setEmailError("");
    setPasswordError("");

    // Perform basic input validation
    if (!email || !password) {
      if (!email) setEmailError("Email is required.");
      if (!password) setPasswordError("Password is required.");
      // Dispatch an action to set the error message in the Redux store
      dispatch({
        type: "REGISTRATION_ERROR",
        payload: "Please fill in all fields.",
      });
      return;
    }

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
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={handleEmailChange}
                    error={Boolean(emailError)} // Add this to show error styling
                    helperText={emailError} // Add this to display error message
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
                    error={Boolean(passwordError)} // Add this to show error styling
                    helperText={passwordError} // Add this to display error message
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
                startIcon={<HowToRegIcon fontSize="small" />}
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
