// mui imports //
import {
  LinearProgress,
  LinearProgressProps,
  Typography,
  Stack,
  Card,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
// routing imports //
import { Link as RouterLink } from "react-router-dom";

const Answered = (props: any) => {
  const LinearProgressWithLabel = (
    props: LinearProgressProps & { value: number }
  ) => {
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    );
  };

  const option1Votes = props.question.option1Votes
    ? props.question.option1Votes.length
    : 0;
  const option2Votes = props.question.option2Votes
    ? props.question.option2Votes.length
    : 0;
  const totalVotes = option1Votes + option2Votes;

  const Question1 = (
    <Card
      raised
      sx={{
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <Stack>
        <Typography>{props.question.option1}</Typography>
        {props.user.votes[props.question.id] === "1" ? (
          <LinearProgressWithLabel
            color="success"
            value={(option1Votes * 100) / totalVotes}
          />
        ) : (
          <LinearProgressWithLabel
            color="error"
            value={(option1Votes * 100) / totalVotes}
          />
        )}
        <Typography align="center">
          {option1Votes} out of {totalVotes} votes.
        </Typography>
      </Stack>
    </Card>
  );

  const Question2 = (
    <Card raised sx={{ padding: "1rem", marginBottom: "1rem" }}>
      <Stack>
        <Typography>{props.question.option2}</Typography>
        {props.user.votes[props.question.id] === "2" ? (
          <LinearProgressWithLabel
            color="success"
            value={(option2Votes * 100) / totalVotes}
          />
        ) : (
          <LinearProgressWithLabel
            color="error"
            value={(option2Votes * 100) / totalVotes}
          />
        )}
        <Typography align="center">
          {option2Votes} out of {totalVotes} votes.
        </Typography>
      </Stack>
    </Card>
  );

  return (
    <Stack sx={{ width: "90%", margin: "0 auto", padding: "3rem 0 1rem" }}>
      <Typography variant="h5" component="h2" sx={{ marginBottom: "1rem" }}>
        Would you rather...
      </Typography>
      {Question1}
      {Question2}
      <Typography variant="caption" align="center">
        The green bar denotes where your vote has been placed.
      </Typography>
      <Button
        variant="contained"
        sx={{ width: "6rem", margin: "0 auto", textTransform: "none" }}
        component={RouterLink}
        to="/"
      >
        Go Back
      </Button>
    </Stack>
  );
};

export default Answered;
