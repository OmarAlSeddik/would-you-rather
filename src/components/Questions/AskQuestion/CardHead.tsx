import { Stack, Typography, Avatar } from "@mui/material";
import useUser from "../../../hooks/useUser";

const CardHead = () => {
  const [user, avatar] = useUser();

  return (
    <Stack
      alignItems="center"
      sx={{
        marginBottom: "1rem",
        backgroundColor: "primary.main",
        paddingTop: "2rem",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        align="center"
        sx={{ color: "white" }}
      >
        Ask a Question, {user.username}!
      </Typography>
      <Avatar
        sx={{
          position: "relative",
          marginBottom: "-3rem",
          width: "6rem",
          height: "6rem",
          border: "0.25rem solid #fff",
        }}
      >
        {avatar}
      </Avatar>
    </Stack>
  );
};

export default CardHead;
