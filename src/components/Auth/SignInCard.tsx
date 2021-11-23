// mui imports //
import { Card, Stack, Typography, TextField, Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
// hook imports //
import { useRef } from "react";
// redux imports //
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
// firebase imports //
import { auth } from "../../firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
// object imports //
import manageErrors from "./manageErrors";

const SignInCard = () => {
  const dispatch = useDispatch();

  const handleToggleAuthMode = () => {
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

  if (user) dispatch(authActions.login(user));

  return (
    <Card
      raised
      sx={{
        width: "21rem",
        maxWidth: "100vw",
        padding: "1rem 2rem",
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
          error={manageErrors.emailError(error)}
          helperText={manageErrors.emailHelperText(error)}
          inputRef={emailInputRef}
          sx={{ marginBottom: "0.5rem" }}
        />
        <TextField
          size="small"
          id="password"
          label="Password"
          type="password"
          error={manageErrors.passwordError(error)}
          helperText={manageErrors.passwordHelperText(error)}
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
          onClick={handleToggleAuthMode}
        >
          Create a new account
        </Button>
      </Stack>
    </Card>
  );
};

export default SignInCard;
