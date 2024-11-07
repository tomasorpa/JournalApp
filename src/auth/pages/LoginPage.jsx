import { useMemo } from "react";
/* eslint-disable react/no-unescaped-entities */
import { Google } from "@mui/icons-material";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  checkingAuthentication,
  startGoogleSignIn,
  startLoginWithEmailAndPassword,
} from "../../store";
const formData = {
  email: "",
  password: "",
};
export const LoginPage = () => {
  const dispatch = useDispatch();
  const { onInputChange, onResetForm, email, password } = useForm(formData);
  // const { status } = useSelector((state) => state.auth);
  const { status, errorMessage } = useSelector((state) => state.auth);
  const isAuthenticating = useMemo(() => status === "Checking", [status]);
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(checkingAuthentication());
    onResetForm();
  };
  const onGoogleSignIn = () => {
    console.log("Google Sign In");
    dispatch(startGoogleSignIn());
  };
  const onLoginWithEmailAndPassword = () => {
    dispatch(startLoginWithEmailAndPassword({ email, password }));
  };
  return (
    <AuthLayout title="Login">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container sx={{ gap: 2 }}>
          <Grid item xs={12}>
            <TextField
              label="Mail"
              type="email"
              placeholder="tomasor@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} display={errorMessage ? "" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: "primary.700" }}
                fullWidth
                disabled={isAuthenticating}
                onClick={onLoginWithEmailAndPassword}
              >
                Login
              </Button>
            </Grid>

            <Grid item xs={12} md={6}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "primary.700" }}
                fullWidth
                onClick={onGoogleSignIn}
                disabled={isAuthenticating}
              >
                <Google sx={{ mr: 1 }} />
                <Typography>Google</Typography>
              </Button>
            </Grid>

            <Grid
              container
              alignItems={"center"}
              justifyContent={"end"}
              sx={{ mt: 1, gap: 1 }}
            >
              <Typography>Don't have an account?</Typography>
              <Link
                component={RouterLink}
                to={"/auth/register"}
                sx={{ color: "primary.400", fontWeight: "bold" }}
              >
                Sign Up
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
