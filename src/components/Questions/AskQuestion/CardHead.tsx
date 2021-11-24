// mui imports //
import { Stack, Typography, Avatar } from "@mui/material";

const CardHead = (props: any) => {
  return (
    <Stack
      alignItems="center"
      sx={{
        backgroundColor: "primary.main",
        paddingTop: "1rem",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        align="center"
        sx={{ color: "white" }}
      >
        Ask a Question, {props.user.username}!
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
        {props.avatar}
      </Avatar>
    </Stack>
  );
};

export default CardHead;
