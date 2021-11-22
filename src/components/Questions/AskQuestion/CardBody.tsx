import { Stack, Typography, TextField, Button } from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import useUser from "../../../hooks/useUser";
import { questionsActions } from "../../../store/questions";
import { userbaseActions } from "../../../store/userbase";

const CardBody = () => {
  const [user] = useUser();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();

  const option1InputRef = useRef<HTMLInputElement>(null);
  const option2InputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    const option1 = option1InputRef?.current?.value || "";
    const option2 = option2InputRef?.current?.value || "";
    if (option1 && option2)
      dispatch(
        questionsActions.addQuestion({
          id: user.id + new Date().getTime(),
          author: user.username,
          date: new Date(),
          avatar: user.avatar,
          option1,
          option2,
        })
      );
    dispatch(
      userbaseActions.addQuestionToUser({
        userId: user.id,
        questionId: user.id + new Date().getTime(),
      })
    );
    setIsSubmitted(true);
  };

  const goBack = () => {
    setIsSubmitted(false);
  };

  if (isSubmitted)
    return (
      <Stack sx={{ width: "90%", margin: "0 auto", padding: "2rem 0" }}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          sx={{ padding: "1rem", color: "success.main" }}
        >
          Your question has been created successfully!
        </Typography>
        <Button
          variant="contained"
          sx={{ width: "12rem", margin: "0 auto", textTransform: "none" }}
          onClick={goBack}
        >
          Ask Another Question?
        </Button>
      </Stack>
    );

  return (
    <Stack sx={{ width: "90%", margin: "0 auto", padding: "2rem 0" }}>
      <Typography variant="h5" component="h2" sx={{ marginBottom: "0.5rem" }}>
        Would you rather...
      </Typography>
      <TextField
        size="small"
        placeholder="First option."
        sx={{ marginBottom: "0.5rem" }}
        inputRef={option1InputRef}
      />
      <TextField
        size="small"
        placeholder="Second option."
        sx={{ marginBottom: "1rem" }}
        inputRef={option2InputRef}
      />
      <Button
        variant="contained"
        sx={{ width: "6rem", margin: "0 auto", textTransform: "none" }}
        onClick={handleSubmit}
      >
        Ask
      </Button>
    </Stack>
  );
};

export default CardBody;
