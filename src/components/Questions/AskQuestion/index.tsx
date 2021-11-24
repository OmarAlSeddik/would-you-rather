// mui imports //
import { Card } from "@mui/material";
import { Box } from "@mui/system";
// local component imports //
import CardBody from "./CardBody";
import CardHead from "./CardHead";
import Submitted from "./Submitted";
// hook imports //
import { useState } from "react";
import useUser from "../../../hooks/useUser";

const AddQuestion = () => {
  const [user, avatar] = useUser();
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        <CardHead user={user} avatar={avatar} />
        {isSubmitted ? (
          <Submitted goBack={() => setIsSubmitted(false)} />
        ) : (
          <CardBody user={user} submit={() => setIsSubmitted(true)} />
        )}
      </Card>
    </Box>
  );
};

export default AddQuestion;
