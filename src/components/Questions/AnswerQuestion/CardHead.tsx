import { Stack, Typography, Avatar } from "@mui/material";
import useAvatar from "../../../hooks/useAvatar";

const CardHead = (props: any) => {
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
        {props.question.author} Asks!
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
        {useAvatar(props.question.avatar)}
      </Avatar>
    </Stack>
  );
};

export default CardHead;
