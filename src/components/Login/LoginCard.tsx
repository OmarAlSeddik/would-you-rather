import {
  Card,
  Stack,
  Typography,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { authenticationActions } from "../../store/authentication";
import { useState } from "react";

const LoginCard = () => {
  const userbase: any = useSelector((state: RootState) => state.userbase);
  const [user, setUser] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value as string);
  };

  const userOptions = Object.keys(userbase).map((userId) => ({
    key: userId,
    id: userId,
    name: userbase[userId].name,
    image: { avatar: true, src: userbase[userId].avatarURL },
  }));

  const dispatch = useDispatch();
  const handleAuthentication = () => {
    dispatch(authenticationActions.login());
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
        <Typography align="center" component="h1" sx={{ marginBottom: "2rem" }}>
          Login to Your Account
        </Typography>
        <TextField
          id="select-user"
          select
          label="Select User"
          value={user}
          onChange={handleChange}
          helperText="Please select the user"
        >
          {userOptions.map((user) => (
            <MenuItem value={user.id}>{user.name}</MenuItem>
          ))}
        </TextField>

        <Button
          variant="contained"
          sx={{ marginTop: "1rem" }}
          onClick={handleAuthentication}
        >
          Login
        </Button>
      </Stack>
    </Card>
  );
};

export default LoginCard;
