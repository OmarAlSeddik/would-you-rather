// mui imports //
import { Card, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Box } from "@mui/system";
// local component imports //
import Answered from "./Answered";
// hook imports //
import useStickyState from "../../hooks/useStickyState";
import useUser from "../../hooks/useUser";
// redux imports //
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Unanswered from "./Unanswered";

const Home = () => {
  const [user] = useUser();

  const questions = useSelector((state: RootState) => state.questions);

  const [tapValue, setTabValue] = useStickyState("unanswered", "tapValue");

  const handleTabValue = (
    event: React.MouseEvent<HTMLElement>,
    newTapValue: string | null
  ) => {
    if (newTapValue !== null) {
      setTabValue(newTapValue);
    }
  };

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
          {tapValue === "unanswered" ? (
            <Unanswered user={user} questions={questions} />
          ) : (
            <Answered user={user} questions={questions} />
          )}
        </Stack>
      </Card>
    </Box>
  );
};

export default Home;
