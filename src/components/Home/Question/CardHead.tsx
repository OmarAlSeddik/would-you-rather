import { Stack, Typography, Avatar } from "@mui/material";

const CardHead = () => {
  return (
    <Stack
      alignItems="center"
      sx={{
        marginBottom: "1rem",
        backgroundColor: "primary.main",
        paddingTop: "1rem",
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        align="center"
        sx={{ color: "white" }}
      >
        [user.name]
      </Typography>
      <Avatar
        sx={{
          position: "relative",
          marginBottom: "-3rem",
          width: "6rem",
          height: "6rem",
          border: "0.25rem solid #fff",
        }}
      />
    </Stack>
  );
};

export default CardHead;
