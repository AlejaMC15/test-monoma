import React, { useState } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container
} from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConf";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");

  /*  const handleAction = async () => {
     try {
       const response: any = await createUserWithEmailAndPassword(
         auth,
         emailUser,
         passwordUser
       );
       sessionStorage.setItem(
         "Auth Token",
         response._tokenResponse.refreshToken
       );
       response.operationType === "signIn" && navigate("/")
     } catch (err: any) {
       console.log(JSON.stringify(err), err.firebase);
     }
   }; */

  const handleAction = async (e: any) => {
    e.preventDefault()

    await createUserWithEmailAndPassword(auth, emailUser, passwordUser)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });


  }

  console.log(emailUser, 'setUserEml', passwordUser, 'setUserPass');


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={require('../../assets/images/logo.png')} alt="" />
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box
          component="form"
          noValidate
          /* onSubmit={handleSubmit} */
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Email Address"
                autoComplete="email"
                onChange={(e: any) => setEmailUser(e.target.value)}
              />

            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                autoComplete="new-password"
                onChange={(e: any) => setPasswordUser(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleAction}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
