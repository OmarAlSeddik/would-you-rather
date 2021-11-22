// mui imports //
import { Stack, Typography } from "@mui/material";
import QuestionAnswerTwoToneIcon from "@mui/icons-material/QuestionAnswerTwoTone";

const Logo = () => {
  return (
    <Stack direction="row" sx={{ padding: "1rem" }}>
      <QuestionAnswerTwoToneIcon fontSize="large" color="primary" />
      <Typography
        color="primary"
        variant="h4"
        component="h2"
        sx={{ fontFamily: "Lobster" }}
      >
        Would You Rather?
      </Typography>
    </Stack>
  );
};

export default Logo;
