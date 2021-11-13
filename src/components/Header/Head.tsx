import { Paper, Stack, Typography, Avatar, ButtonBase } from "@mui/material";
import QuestionAnswerTwoToneIcon from "@mui/icons-material/QuestionAnswerTwoTone";

const Head = () => {
  return (
    <Paper sx={{ borderRadius: 0 }}>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ width: "90%", margin: "0 auto" }}
      >
        <QuestionAnswerTwoToneIcon color="primary" />
        <Typography
          variant="h5"
          component="h2"
          color="primary"
          sx={{ fontFamily: "Lobster" }}
        >
          Would You Rather?
        </Typography>
        <ButtonBase
          disableRipple
          sx={{
            padding: "0.5rem",
            marginLeft: "auto",
            textTransform: "capitalize",
          }}
        >
          <Avatar
            alt="Omar Al Seddik"
            src=""
            sx={{ height: "2rem", width: "2rem", marginRight: "0.5rem" }}
          />
          Omar Al Seddik
        </ButtonBase>
      </Stack>
    </Paper>
  );
};

export default Head;
