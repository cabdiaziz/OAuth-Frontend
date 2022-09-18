import React from "react";
import Logo from "./components/Logo";
import { Container, Box, TextField, Button, Grid } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";
import { loginFirebase } from "../firebase/firebase_login";

const Signup = () => {
  return (
    <div>
      <Container maxWidth="sm" align="center">
        <form className="form">
          <Logo />
          <h3>Sign Up</h3>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder="Email"
              name="email"
              autoComplete="email"
              variant="outlined"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              type="password"
              placeholder="password"
              variant="outlined"
            />
            <Button
              size="large"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Button
              size="large"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              startIcon={<GoogleIcon />}
              onClick={() => {
                loginFirebase();
              }}
            >
              Signup With Google
            </Button>

            <Grid container>
              <Grid item>
                <Link to="/login" variant="body2">
                  I already have an account! Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Container>
    </div>
  );
};

export default Signup;
