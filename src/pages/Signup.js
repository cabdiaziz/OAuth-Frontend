import React from "react";
import Logo from "./components/Logo";
import { Container, Box, Button, Grid } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";
import { createUser } from "../redux/thunk/userThunk.js";
import { useDispatch } from "react-redux";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebase-config";

let userData = null;

const Signup = () => {
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const requestData = {
      user: userData,
    };

    const result = await dispatch(createUser(requestData));

    if (result.type === "user/loginUser/fulfilled") {
      if (result.payload === 201) {
        alert("registration successful");
      } else {
        alert(result.payload.data);
      }
    } else if (result.type === "user/loginUser/rejected") {
      alert("user login rejected");
    }
  };

  const SignUpFirebase = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        userData = user;

        handleSubmit();
      })
      .catch((error) => {
        return error.message;
      });
  };

  return (
    <div>
      <Container maxWidth="sm" className="form" align="center">
        <Logo />
        <h3>Sign Up</h3>
        <Box component="form" sx={{ mt: 1 }}>
          <Button
            size="large"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            startIcon={<GoogleIcon />}
            onClick={() => {
              SignUpFirebase();
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
      </Container>
    </div>
  );
};

export default Signup;
