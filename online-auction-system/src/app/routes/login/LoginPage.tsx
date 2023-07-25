// pages/Register.tsx
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState, loginRequest } from "../../../../store";
import { useRouter } from "next/router";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const router = useRouter();

  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.loginAuth.loading);
  const error = useSelector((state: RootState) => state.loginAuth.error);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Reset previous error messages
    setEmailError('');
    setPasswordError('');
    // Perform basic input validation
    if (!email || !password) {
        if (!email) setEmailError('Email is required.');
        if (!password) setPasswordError('Password is required.');
        // Dispatch an action to set the error message in the Redux store
        dispatch({ type: 'LOGIN_ERROR', payload: 'Please fill in all fields.' });
        return;
    }
    // Dispatch the login request action to trigger the login saga
    dispatch(loginRequest({ email, password }));
    await router.push(`/bidding`);
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
            Log in
          </Typography>
        </Grid>
        <Grid item>
          <Box sx={{ mt: 1 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
              {error && <p>{error}</p>}
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    autoFocus
                    variant="outlined"
                    fullWidth
                    autoComplete="email"
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
                    autoComplete="current-password"
                    value={password}
                    onChange={handlePasswordChange}
                    error={Boolean(passwordError)} // Add this to show error styling
                    helperText={passwordError} // Add this to display error message
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="remember" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} color="primary" />}
                    label="Remember me"
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
                Log In
              </Button>
              {error && <p>{error}</p>}
            </form>
            <Grid container>
              <Grid item xs>
                <Link href="#">
                  <Typography variant="body2"> Forgot password? </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register">
                  <Typography variant="body2">
                    {"Don't have an account? Register"}
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
