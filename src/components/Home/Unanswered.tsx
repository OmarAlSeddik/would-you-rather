// mui imports //
import { Stack, Typography } from "@mui/material";
// local component imports //
import QuestionCard from "../Questions/QuestionCard";

const Unanswered = (props: any) => {
  return (
    <Stack sx={{ padding: "1rem 1rem 0" }}>
      {props.questions
        .filter((question: any) => {
          if (!props.user.votes) return true;
          if (!props.user.votes.hasOwnProperty(question.id)) return true;
          else return false;
        })
        .map((question: any) => (
          <QuestionCard
            id={question.id}
            option1={question.option1}
            author={question.author}
            avatar={question.avatar}
          />
        ))}
      {props.questions.filter((question: any) => {
        if (!props.user.votes) return true;
        if (!props.user.votes.hasOwnProperty(question.id)) return true;
        else return false;
      }).length === 0 && (
        <Typography
          align="center"
          variant="h4"
          component="p"
          sx={{ marginBottom: "1rem", color: "text.secondary" }}
        >
          There are no more questions for you to answer.
        </Typography>
      )}
    </Stack>
  );
};

export default Unanswered;
