import { useState } from "react";

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

import { useDispatch } from "react-redux";
import { questionsActions } from "../../../store/questions";
import { userbaseActions } from "../../../store/userbase";
import useUser from "../../../hooks/useUser";

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
        <Typography variant="h5" component="h2">
          Would you rather...
        </Typography>
        <Card raised sx={{ padding: "1rem", marginBottom: "1rem" }}>
          <Stack>
            <Typography>{props.question.option1}</Typography>
            <LinearProgressWithLabel
              value={(option1Votes * 100) / totalVotes}
            />
            <Typography align="center">
              {option1Votes} out of {totalVotes} votes.
            </Typography>
          </Stack>
        </Card>
        <Card raised sx={{ padding: "1rem" }}>
          <Stack>
            <Typography>{props.question.option2}</Typography>
            <LinearProgressWithLabel
              value={(option2Votes * 100) / totalVotes}
            />
            <Typography align="center">
              {option2Votes} out of {totalVotes} votes.
            </Typography>
          </Stack>
        </Card>
      </Stack>
    );
  }

  return (
    <Stack sx={{ width: "90%", margin: "0 auto", padding: "2rem 0" }}>
      <Typography variant="h5" component="h2">
        Would you rather...
      </Typography>
      <RadioGroup
        aria-label="gender"
        name="controlled-radio-buttons-group"
        value={answer}
        onChange={handleAnswerChange}
      >
        <FormControlLabel
          value="1"
          control={<Radio />}
          label={props.question.option1}
        />
        <FormControlLabel
          value="2"
          control={<Radio />}
          label={props.question.option2}
        />
      </RadioGroup>
      <Button
        variant="contained"
        sx={{ width: "6rem", margin: "0 auto" }}
        onClick={handleSubmit}
      >
        Answer
      </Button>
    </Stack>
  );
};

export default CardBody;
