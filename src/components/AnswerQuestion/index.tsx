import { Card } from "@mui/material";
import { Box } from "@mui/system";

import CardHead from "./CardHead";
import CardBody from "./CardBody";

const AnswerQuestion = () => {
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
        <CardHead />
        <CardBody />
      </Card>
    </Box>
  );
};

export default AnswerQuestion;
