import React from "react";
import Logo from "./components/Logo";
import { Container, Box, TextField, Button, Grid, Link } from "@mui/material";

const Login = () => {
  return (
    <div>
      <Container maxWidth="sm" align="center">
        <form className="form">
          <Logo />
          <h3>Login</h3>
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
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login With Google
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Container>
    </div>
  );
};

export default Login;
