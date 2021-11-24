// mui imports //
import { Stack, Typography } from "@mui/material";
// local component imports //
import QuestionCard from "../Questions/QuestionCard";

const Answered = (props: any) => {
  return (
    <Stack sx={{ padding: "1rem 1rem 0" }}>
      {props.questions
        .filter(
          (question: any) =>
            props.user.votes && props.user.votes.hasOwnProperty(question.id)
        )
        .map((question: any) => (
          <QuestionCard
            id={question.id}
            option1={question.option1}
            author={question.author}
            avatar={question.avatar}
          />
        ))}
      {props.questions.filter(
        (question: any) =>
          props.user.votes && props.user.votes.hasOwnProperty(question.id)
      ).length === 0 && (
        <Typography
          align="center"
          variant="h4"
          component="p"
          sx={{ marginBottom: "1rem", color: "text.secondary" }}
        >
          You haven't answered any questions yet.
        </Typography>
      )}
    </Stack>
  );
};

export default Answered;
