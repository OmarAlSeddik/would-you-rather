import { useState } from "react";

import { Card, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import Question from "./Question";
import { Box } from "@mui/system";

const Home = () => {
  const [tapValue, setTabValue] = useState("unanswered");
  const handleTabValue = (
    event: React.MouseEvent<HTMLElement>,
    newTapValue: string | null
  ) => {
    if (newTapValue !== null) {
      setTabValue(newTapValue);
    }
  };

  const unansweredQuestions = (
    <Stack>
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
    </Stack>
  );

  const answeredQuestions = (
    <Stack>
      <Question />
      <Question />
      <Question />
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
