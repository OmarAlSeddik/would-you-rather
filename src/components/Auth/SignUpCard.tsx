import { Card, Stack, Typography, TextField, Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import { authActions } from "../../store/auth";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase";
import { useRef } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const SignUpCard = () => {
  const dispatch = useDispatch();

  const switchAuthModeHandler = () => {
    dispatch(authActions.toggleAuthMode());
  };

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = () => {
    const email = emailInputRef?.current?.value || "";
    const password = passwordInputRef?.current?.value || "";
    return createUserWithEmailAndPassword(email, password);
  };

  const emailError = () => {
    return (
      (error && error["message"] === "Firebase: Error (auth/invalid-email).") ||
      (error &&
        error["message"] === "Firebase: Error (auth/email-already-in-use).")
    );
  };

  const emailHelperText = () => {
    if (error && error["message"] === "Firebase: Error (auth/invalid-email).") {
      return "Invalid email.";
    }
    if (
      error &&
      error["message"] === "Firebase: Error (auth/email-already-in-use)."
    ) {
      return "Email already in use.";
    } else return "Requires a valid email format.";
  };

  const passwordError = () => {
    return (
      error &&
      error["message"] ===
        "Firebase: Password should be at least 6 characters (auth/weak-password)."
    );
  };

  const passwordHelperText = () => {
    if (
      error &&
      error["message"] ===
        "Firebase: Password should be at least 6 characters (auth/weak-password)."
    ) {
      return "Weak password.";
    } else return "Needs to be at least 6 characters long.";
  };

  if (user)
    return (
      <Card raised sx={{ width: "21rem", padding: "2rem" }}>
        <Stack>
          <Typography
            variant="h6"
            component="h2"
            align="center"
            sx={{ color: "success.main", marginBottom: "1rem" }}
          >
            Your account has been created successfully!
          </Typography>
          <Button variant="contained" onClick={switchAuthModeHandler}>
            Sign In
          </Button>
        </Stack>
      </Card>
    );

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
          Create a New Account
        </Typography>
        <TextField
          size="small"
          id="email"
          label="Email"
          inputRef={emailInputRef}
          error={emailError()}
          helperText={emailHelperText()}
          sx={{ marginBottom: "0.25rem" }}
        />
        <TextField
          size="small"
          id="password"
          label="Password"
          type="password"
          inputRef={passwordInputRef}
          error={passwordError()}
          helperText={passwordHelperText()}
        />
        <LoadingButton
          variant="contained"
          loading={loading}
          loadingPosition="end"
          sx={{ margin: "1rem 0", textTransform: "none" }}
          onClick={handleSubmit}
        >
          {loading ? "Loading..." : "Sign Up"}
        </LoadingButton>
        <Button
          variant="text"
          size="small"
          disableRipple
          sx={{ textTransform: "none" }}
          onClick={switchAuthModeHandler}
        >
          Sign in with an existing account
        </Button>
      </Stack>
    </Card>
  );
};

export default SignUpCard;
