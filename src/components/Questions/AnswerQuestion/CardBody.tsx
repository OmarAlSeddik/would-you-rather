// mui imports //
import {
  Stack,
  Typography,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
  Card,
} from "@mui/material";
// hook imports //
import { useState } from "react";
// redux imports //
import { useDispatch } from "react-redux";
import { questionsActions } from "../../../store/questions";
import { userbaseActions } from "../../../store/userbase";

const CardBody = (props: any) => {
  const dispatch = useDispatch();

  const [answer, setAnswer] = useState("1");
  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer((event.target as HTMLInputElement).value);
  };

  const handleSubmit = () => {
    dispatch(
      questionsActions.addVote({
        userId: props.user.id,
        questionId: props.question.id,
        option: answer,
      })
    );
    dispatch(
      userbaseActions.addVoteToUser({
        userId: props.user.id,
        questionId: props.question.id,
        option: answer,
      })
    );
  };

  return (
    <Stack sx={{ width: "90%", margin: "0 auto", padding: "3rem 0 1rem" }}>
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
