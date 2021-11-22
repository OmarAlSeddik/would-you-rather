// mui imports //
import { Card } from "@mui/material";
import { Box } from "@mui/system";
// local component imports //
import CardHead from "./CardHead";
import CardBody from "./CardBody";
// hook imports //
import useQuestion from "../../../hooks/useQuestion";
// routing imports //
import { useParams } from "react-router";

const AnswerQuestion = () => {
  const questionId = useParams().question_id;
  const question = useQuestion(questionId || "");

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
        <CardBody question={question} />
      </Card>
    </Box>
  );
};

export default AnswerQuestion;
