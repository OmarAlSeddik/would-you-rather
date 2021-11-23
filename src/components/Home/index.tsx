// mui imports //
import {
  Card,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
// local component imports //
import QuestionCard from "../Questions/QuestionCard";
// hook imports //
import { useState } from "react";
import useUser from "../../hooks/useUser";
// redux imports //
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Home = () => {
  const [user] = useUser();
  const [tapValue, setTabValue] = useState("unanswered");

  const handleTabValue = (
    event: React.MouseEvent<HTMLElement>,
    newTapValue: string | null
  ) => {
    if (newTapValue !== null) {
      setTabValue(newTapValue);
    }
  };

  const questions = useSelector((state: RootState) => state.questions);

  const unansweredQuestions = (
    <Stack sx={{ padding: "1rem 1rem 0" }}>
      {questions
        .filter((question: any) => {
          if (!user.votes) return true;
          if (!user.votes.hasOwnProperty(question.id)) return true;
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
      {questions.filter((question: any) => {
        if (!user.votes) return true;
        if (!user.votes.hasOwnProperty(question.id)) return true;
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

  const answeredQuestions = (
    <Stack sx={{ padding: "1rem 1rem 0" }}>
      {questions
        .filter(
          (question: any) =>
            user.votes && user.votes.hasOwnProperty(question.id)
        )
        .map((question: any) => (
          <QuestionCard
            id={question.id}
            option1={question.option1}
            author={question.author}
            avatar={question.avatar}
          />
        ))}
      {questions.filter(
        (question: any) => user.votes && user.votes.hasOwnProperty(question.id)
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

  return (
    <Box>
      <Card
        raised
        sx={{
          margin: "9rem auto 4.5rem",
          width: "56.25rem",
          maxWidth: "100vw",
          borderRadius: { xs: 0, md: "8px" },
        }}
      >
        <Stack>
          <ToggleButtonGroup
            color="primary"
            fullWidth
            exclusive
            value={tapValue}
            onChange={handleTabValue}
          >
            <ToggleButton
              disableRipple
              value="unanswered"
              sx={{ borderRadius: 0, textTransform: "none" }}
            >
              Unasnwered Questions
            </ToggleButton>
            <ToggleButton
              disableRipple
              value="answered"
              sx={{ borderRadius: 0, textTransform: "none" }}
            >
              Answered Questions
            </ToggleButton>
          </ToggleButtonGroup>
          {tapValue === "unanswered" ? unansweredQuestions : answeredQuestions}
        </Stack>
      </Card>
    </Box>
  );
};

export default Home;
