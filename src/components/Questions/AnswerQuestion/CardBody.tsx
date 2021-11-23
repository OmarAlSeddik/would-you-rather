// mui imports //
import {
  Stack,
  Typography,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
  Card,
  LinearProgress,
  LinearProgressProps,
  Box,
} from "@mui/material";
// hook imports //
import { useState } from "react";
import useUser from "../../../hooks/useUser";
// redux imports //
import { useDispatch } from "react-redux";
import { questionsActions } from "../../../store/questions";
import { userbaseActions } from "../../../store/userbase";
// routing imports //
import { Link as RouterLink } from "react-router-dom";

const CardBody = (props: any) => {
  const dispatch = useDispatch();
  const [user] = useUser();

  const [answer, setAnswer] = useState("1");
  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer((event.target as HTMLInputElement).value);
  };

  const handleSubmit = () => {
    dispatch(
      questionsActions.addVote({
        userId: user.id,
        questionId: props.question.id,
        option: answer,
      })
    );
    dispatch(
      userbaseActions.addVoteToUser({
        userId: user.id,
        questionId: props.question.id,
        option: answer,
      })
    );
  };

  const userPreviouslyAnswered =
    (props.question.option1Votes &&
      props.question.option1Votes.includes(user.id)) ||
    (props.question.option2Votes &&
      props.question.option2Votes.includes(user.id));

  function LinearProgressWithLabel(
    props: LinearProgressProps & { value: number }
  ) {
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
  }

  if (userPreviouslyAnswered) {
    const option1Votes = props.question.option1Votes
      ? props.question.option1Votes.length
      : 0;
    const option2Votes = props.question.option2Votes
      ? props.question.option2Votes.length
      : 0;
    const totalVotes = option1Votes + option2Votes;

    return (
      <Stack sx={{ width: "90%", margin: "0 auto", padding: "2rem 0" }}>
        <Typography variant="h5" component="h2" sx={{ marginBottom: "1rem" }}>
          Would you rather...
        </Typography>
        {user.votes[props.question.id] === "1" ? (
          <Card
            raised
            sx={{
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <Stack>
              <Typography>{props.question.option1}</Typography>
              <LinearProgressWithLabel
                color="success"
                value={(option1Votes * 100) / totalVotes}
              />
              <Typography align="center">
                {option1Votes} out of {totalVotes} votes.
              </Typography>
            </Stack>
          </Card>
        ) : (
          <Card raised sx={{ padding: "1rem", marginBottom: "1rem" }}>
            <Stack>
              <Typography>{props.question.option1}</Typography>
              <LinearProgressWithLabel
                color="error"
                value={(option1Votes * 100) / totalVotes}
              />
              <Typography align="center">
                {option1Votes} out of {totalVotes} votes.
              </Typography>
            </Stack>
          </Card>
        )}

        {user.votes[props.question.id] === "2" ? (
          <Card raised sx={{ padding: "1rem", marginBottom: "1rem" }}>
            <Stack>
              <Typography>{props.question.option2}</Typography>
              <LinearProgressWithLabel
                color="success"
                value={(option2Votes * 100) / totalVotes}
              />
              <Typography align="center">
                {option2Votes} out of {totalVotes} votes.
              </Typography>
            </Stack>
          </Card>
        ) : (
          <Card raised sx={{ padding: "1rem", marginBottom: "1rem" }}>
            <Stack>
              <Typography>{props.question.option2}</Typography>
              <LinearProgressWithLabel
                color="error"
                value={(option2Votes * 100) / totalVotes}
              />
              <Typography align="center">
                {option2Votes} out of {totalVotes} votes.
              </Typography>
            </Stack>
          </Card>
        )}
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
  }

  return (
    <Stack sx={{ width: "90%", margin: "0 auto", padding: "2rem 0" }}>
      <Typography variant="h5" component="h2" sx={{ marginBottom: "1rem" }}>
        Would you rather...
      </Typography>
      <RadioGroup
        aria-label="gender"
        name="controlled-radio-buttons-group"
        value={answer}
        onChange={handleAnswerChange}
      >
        <Card raised sx={{ marginBottom: "1rem" }}>
          <FormControlLabel
            value="1"
            control={<Radio />}
            label={props.question.option1}
            sx={{ width: "100%", padding: "1rem" }}
          />
        </Card>
        <Card raised sx={{ marginBottom: "1rem" }}>
          <FormControlLabel
            value="2"
            control={<Radio />}
            label={props.question.option2}
            sx={{ width: "100%", padding: "1rem" }}
          />
        </Card>
      </RadioGroup>
      <Typography variant="caption" align="center">
        You can not undo your vote.
      </Typography>
      <Button
        variant="contained"
        sx={{ width: "6rem", margin: "0 auto", textTransform: "none" }}
        onClick={handleSubmit}
      >
        Answer
      </Button>
    </Stack>
  );
};

export default CardBody;
