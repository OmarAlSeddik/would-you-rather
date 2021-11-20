import {
  Card,
  Stack,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import { useState } from "react";
import { authActions } from "../../store/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase";
import { useRef } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Box } from "@mui/system";
import { RootState } from "../../store";
import { userbaseActions } from "../../store/userbase";

const SignUpCard = () => {
  const dispatch = useDispatch();
  const userbase = useSelector<RootState>((state) => state.userbase);

  const switchAuthModeHandler = () => {
    dispatch(authActions.toggleAuthMode());
  };

  const usernameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = () => {
    const email = emailInputRef?.current?.value || "";
    const password = passwordInputRef?.current?.value || "";
    return createUserWithEmailAndPassword(email, password);
  };

  const avatars: any = useSelector<RootState>((state) => state.avatars);
  const [avatar, setAvatar] = useState("1");
  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAvatar(event.target.value);
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

  if (user) {
    const email = emailInputRef?.current?.value || "";
    const username = usernameInputRef?.current?.value || "";
    if (email)
      dispatch(
        userbaseActions.addUser({
          email,
          username,
          avatar,
          answers: {},
          questions: [],
        })
      );
    console.log(userbase);

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
  }

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
        <TextField
          size="small"
          id="username"
          label="Username"
          inputRef={usernameInputRef}
          helperText="No restrictions. Doesn't have to be unique. "
          sx={{ marginBottom: "0.25rem" }}
        />
        <TextField
          select
          size="small"
          id="avatar"
          label="Avatar"
          value={avatar}
          onChange={handleAvatarChange}
          helperText="Select your avatar."
        >
          {avatars.map((avatar: any) => (
            <MenuItem
              key={avatar.value}
              value={avatar.value}
              sx={{ margin: "0 auto" }}
            >
              <Box sx={{ width: "3rem", margin: "0 auto" }}>{avatar.label}</Box>
            </MenuItem>
          ))}
        </TextField>
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
