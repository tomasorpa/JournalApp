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
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailAndPassword } from "../../store";

const initialFormData = {
  email: "",
  password: "",
  displayName: "",
};
const formValidations = {
  email: [
    (value) => value.includes("@") && value.includes("."),
    'Email must include an "@" and "."',
  ],
  password: [
    (value) => value.length >= 6,
    "Password must have more than 5 characters",
  ],
  displayName: [(value) => value.length >= 1, "You can`t send empty fields"],
};
export const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuthentication = useMemo(
    () => status === "Checking",
    [status]
  );
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const {
    email,
    password,
    displayName,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
    onInputChange,
  } = useForm(initialFormData, formValidations);
  const onSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(
      startCreatingUserWithEmailAndPassword({ email, password, displayName })
    );
  };

  return (
    <AuthLayout title="Sign up">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container sx={{ gap: 2 }}>
          <Grid item xs={12}>
            <TextField
              label="Full Name"
              placeholder="Tomas Ortega"
              fullWidth
              onChange={onInputChange}
              name="displayName"
              value={displayName}
              error={!!displayNameValid && isFormSubmitted}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              placeholder="tomasor@gmail.com"
              fullWidth
              onChange={onInputChange}
              name="email"
              value={email}
              error={!!emailValid && isFormSubmitted}
              helperText={emailValid}
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
              error={!!passwordValid && isFormSubmitted}
              helperText={passwordValid}
            />
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} display={errorMessage ? "" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "primary.700" }}
                fullWidth
                type="submit"
                disabled={isCheckingAuthentication}
              >
                Sign Up
              </Button>
            </Grid>

            <Grid
              container
              alignItems={"center"}
              justifyContent={"end"}
              sx={{ mt: 1, gap: 1 }}
            >
              <Typography>Do you have an account?</Typography>
              <Link
                component={RouterLink}
                to={"/auth/login"}
                sx={{ color: "primary.400", fontWeight: "bold" }}
              >
                Log in
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
