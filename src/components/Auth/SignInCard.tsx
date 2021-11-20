import { Card, Stack, Typography, TextField, Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import { useRef } from "react";
import { authActions } from "../../store/auth";
import { useDispatch } from "react-redux";

import { auth } from "../../firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const SignInCard = () => {
  const dispatch = useDispatch();

  const switchAuthModeHandler = () => {
    dispatch(authActions.toggleAuthMode());
  };

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSubmit = () => {
    const email = emailInputRef?.current?.value || "";
    const password = passwordInputRef?.current?.value || "";
    return signInWithEmailAndPassword(email, password);
  };

  if (user) dispatch(authActions.login());

  const emailError = () => {
    return (
      (error && error["message"] === "Firebase: Error (auth/invalid-email).") ||
      (error &&
        error["message"] === "Firebase: Error (auth/user-not-found).") ||
      (error &&
        error["message"] ===
          "Firebase: Access to this account has been temporarily disabled due to many failed login attempts.")
    );
  };

  const emailHelperText = () => {
    if (error && error["message"] === "Firebase: Error (auth/invalid-email).") {
      return "Invalid email.";
    }

    if (
      error &&
      error["message"] === "Firebase: Error (auth/user-not-found)."
    ) {
      return "User not found.";
    }
    if (
      error &&
      error["message"] ===
        "Firebase: Access to this account has been temporarily disabled due to many failed login attempts."
    ) {
      return "Access to this account has been temporarily disabled due to many failed login attempts.";
    } else return "Requires a valid email format.";
  };

  const passwordError = () => {
    return (
      error && error["message"] === "Firebase: Error (auth/wrong-password)."
    );
  };

  const passwordHelperText = () => {
    if (
      error &&
      error["message"] === "Firebase: Error (auth/wrong-password)."
    ) {
      return "Wrong password.";
    } else return "Needs to be at least 6 characters long.";
  };

  return (
    <Card
      raised
      sx={{
        width: "21rem",
        padding: "2rem",
      }}
    >
      <Stack>
        <Typography
          align="center"
          variant="h6"
          component="h1"
          sx={{ marginBottom: "1rem" }}
        >
          Sign Into Your Account
        </Typography>
        <TextField
          size="small"
          id="email"
          label="Email"
          error={emailError()}
          helperText={emailHelperText()}
          inputRef={emailInputRef}
          sx={{ marginBottom: "0.25rem" }}
        />
        <TextField
          size="small"
          id="password"
          label="Password"
          type="password"
          error={passwordError()}
          helperText={passwordHelperText()}
          inputRef={passwordInputRef}
        />
        <LoadingButton
          variant="contained"
          loading={loading}
          loadingPosition="end"
          sx={{ margin: "1rem 0", textTransform: "none" }}
          onClick={handleSubmit}
        >
          {loading ? "Loading..." : "Sign In"}
        </LoadingButton>
        <Button
          variant="text"
          size="small"
          disableRipple
          sx={{ textTransform: "none" }}
          onClick={switchAuthModeHandler}
        >
          Create a new account
        </Button>
      </Stack>
    </Card>
  );
};

export default SignInCard;
