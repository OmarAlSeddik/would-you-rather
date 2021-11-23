// mui imports //
import {
  Card,
  Stack,
  Typography,
  TextField,
  Button,
  MenuItem,
  Avatar,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
// hook imports //
import { useState, useRef } from "react";
// reduximports //
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth";
import { userbaseActions } from "../../store/userbase";
import { RootState } from "../../store";
// firebase imports //
import { auth } from "../../firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
// object imports //
import manageErrors from "./manageErrors";

const SignUpCard = () => {
  const dispatch = useDispatch();

  const handleToggleAuthMode = () => {
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

  if (user) {
    const email = emailInputRef?.current?.value || "";
    const username = usernameInputRef?.current?.value || "";
    if (email)
      dispatch(
        userbaseActions.addUser({
          id: user.user.uid,
          email,
          username,
          avatar,
        })
      );

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
          <Button variant="contained" onClick={handleToggleAuthMode}>
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
          Create a New Account
        </Typography>
        <TextField
          size="small"
          id="email"
          label="Email"
          inputRef={emailInputRef}
          error={manageErrors.emailError(error)}
          helperText={manageErrors.emailHelperText(error)}
          sx={{ marginBottom: "0.5rem" }}
        />
        <TextField
          size="small"
          id="password"
          label="Password"
          type="password"
          inputRef={passwordInputRef}
          error={manageErrors.passwordError(error)}
          helperText={manageErrors.passwordHelperText(error)}
          sx={{ marginBottom: "0.5rem" }}
        />
        <TextField
          size="small"
          id="username"
          label="Username"
          inputRef={usernameInputRef}
          helperText="No restrictions. Doesn't have to be unique. "
          sx={{ marginBottom: "0.5rem" }}
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
              <Avatar
                sx={{
                  width: "6rem",
                  height: "6rem",
                  margin: "0 auto",
                }}
              >
                {avatar.label}
              </Avatar>
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
          onClick={handleToggleAuthMode}
        >
          Sign in with an existing account
        </Button>
      </Stack>
    </Card>
  );
};

export default SignUpCard;
