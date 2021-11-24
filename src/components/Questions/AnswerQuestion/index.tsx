// mui imports //
import { Card } from "@mui/material";
import { Box } from "@mui/system";
// local component imports //
import CardHead from "./CardHead";
import CardBody from "./CardBody";
// hook imports //
import useUser from "../../../hooks/useUser";
import useQuestion from "../../../hooks/useQuestion";
// routing imports //
import { useParams } from "react-router";
import Answered from "./Answered";
import PageNotFound from "../../PageNotFound";

const AnswerQuestion = () => {
  const questionId = useParams().question_id;
  const [user] = useUser();
  const question = useQuestion(questionId || "");

  if (!question) return <PageNotFound />;

  const userPreviouslyAnswered =
    (question.option1Votes && question.option1Votes.includes(user.id)) ||
    (question.option2Votes && question.option2Votes.includes(user.id));

  return (
    <Box sx={{ height: "100vh" }}>
      <Card
        raised
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "56.25rem",
          maxWidth: "100vw",
          marginTop: "3.25rem",
          borderRadius: { xs: 0, md: "8px" },
        }}
      >
        <CardHead question={question} />
        {userPreviouslyAnswered ? (
          <Answered user={user} question={question} />
        ) : (
          <CardBody user={user} question={question} />
        )}
      </Card>
    </Box>
  );
};

export default AnswerQuestion;
