import { Stack, Typography, TextField, MenuItem, Card } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { authActions } from "../../store/auth";

import { auth } from "../../firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Demo = () => {
  const dispatch = useDispatch();

  const userbase: any = useSelector((state: RootState) => state.userbase);
  const [selectedUser, setSelectedUser] = useState<any>("");

  const handleSelectedUserChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedUser(event.target.value as string);
  };

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSubmit = () => {
    const email = selectedUser.email || "";
    const password = "123456";
    return signInWithEmailAndPassword(email, password);
  };

  if (user) dispatch(authActions.login(user));

  const userOptions = () => {
    const optionsArray = [];
    for (let i = 0; i < 3; i++) userbase[i] && optionsArray.push(userbase[i]);
    return optionsArray;
  };

  return (
    <Card
      raised
      sx={{
        width: "21rem",
        padding: "1rem 2rem",
        marginBottom: "1rem",
      }}
    >
      <Stack>
        <Typography
          align="center"
          variant="h6"
          component="h2"
          sx={{ marginBottom: "1rem" }}
        >
          Sign Into a Demo Account
        </Typography>
        <TextField
          id="select-user"
          select
          label="Select User"
          error={!!error}
          value={selectedUser}
          onChange={handleSelectedUserChange}
          helperText="Select a demo user."
          size="small"
        >
          {userOptions().map((user: any) => (
            <MenuItem value={user}>{user.username}</MenuItem>
          ))}
        </TextField>
        <LoadingButton
          variant="contained"
          loading={loading}
          loadingPosition="end"
          sx={{ margin: "1rem 0", textTransform: "none" }}
          onClick={handleSubmit}
        >
          {loading ? "Loading..." : "Sign In"}
        </LoadingButton>
      </Stack>
    </Card>
  );
};

export default Demo;
