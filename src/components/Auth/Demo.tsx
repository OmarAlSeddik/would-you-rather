import {
  Stack,
  Typography,
  TextField,
  MenuItem,
  Button,
  Card,
} from "@mui/material";

import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState } from "react";

const Demo = () => {
  const userbase: any = useSelector((state: RootState) => state.userbase);
  const [user, setUser] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value as string);
  };

  const userOptions = userbase.map((user: any) => ({
    key: user.id,
    id: user.id,
    name: user.name,
    image: { avatar: true, src: user.avatarURL },
  }));

  return (
    <Card
      raised
      sx={{
        width: "21rem",
        padding: "2rem",
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
          value={user}
          onChange={handleChange}
          helperText="Select a demo user."
          size="small"
        >
          {userOptions.map((user: any) => (
            <MenuItem value={user.id}>{user.name}</MenuItem>
          ))}
        </TextField>
        <Button
          variant="contained"
          sx={{ marginTop: "1rem", textTransform: "capitalize" }}
        >
          Sign In
        </Button>
      </Stack>
    </Card>
  );
};

export default Demo;
