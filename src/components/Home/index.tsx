// mui imports //
import { Card, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
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
    <Stack>
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
    </Stack>
  );

  const answeredQuestions = (
    <Stack>
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
    </Stack>
  );

  return (
    <Box sx={{ height: "100vh" }}>
      <Card
        raised
        sx={{
          margin: "9rem auto 0",
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
              sx={{ borderRadius: 0 }}
            >
              Unasnwered Questions
            </ToggleButton>
            <ToggleButton
              disableRipple
              value="answered"
              sx={{ borderRadius: 0 }}
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
