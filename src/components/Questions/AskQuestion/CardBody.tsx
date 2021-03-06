// mui imports //
import { Stack, Typography, TextField, Button } from "@mui/material";
// hook imports //
import { useRef, useState } from "react";
// redux imports //
import { useDispatch } from "react-redux";
import { questionsActions } from "../../../store/questions";
import { userbaseActions } from "../../../store/userbase";

const CardBody = (props: any) => {
  const dispatch = useDispatch();

  const [option1Error, setOption1Error] = useState(false);
  const [option2Error, setOption2Error] = useState(false);

  const option1InputRef = useRef<HTMLInputElement>(null);
  const option2InputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    const option1 = option1InputRef?.current?.value || "";
    const option2 = option2InputRef?.current?.value || "";
    if (!option1 || option1.length > 100 || option1.length < 5) {
      setOption1Error(true);
    } else if (!option2 || option2.length > 100 || option2.length < 5) {
      setOption2Error(true);
    } else {
      dispatch(
        questionsActions.addQuestion({
          id: props.user.id + new Date().getTime(),
          author: props.user.username,
          date: new Date(),
          avatar: props.user.avatar,
          option1,
          option2,
        })
      );
      dispatch(
        userbaseActions.addQuestionToUser({
          userId: props.user.id,
          questionId: props.user.id + new Date().getTime(),
        })
      );
      props.submit();
    }
  };

  return (
    <Stack sx={{ width: "90%", margin: "0 auto", padding: "3rem 0 1rem" }}>
      <Typography variant="h6" component="p" sx={{ marginBottom: "0.25rem" }}>
        Would you rather...
      </Typography>
      <TextField
        size="small"
        label="First Option"
        inputRef={option1InputRef}
        error={option1Error}
      />
      <Typography variant="h6" component="p" align="center">
        -- Or --
      </Typography>
      <TextField
        size="small"
        label="Second Option"
        sx={{ marginBottom: "1rem" }}
        inputRef={option2InputRef}
        error={option2Error}
      />
      <Typography variant="caption" align="center">
        Allowed question length range is 5-100 characters.
      </Typography>
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
