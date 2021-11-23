// mui imports //
import {
  Card,
  Stack,
  Typography,
  Button,
  Avatar,
  Divider,
} from "@mui/material";
// hook imports //
import useAvatar from "../../../hooks/useAvatar";
import { useContext } from "react";
// context imports //
import ThemeContext from "../../../context/ThemeContext";
// routing imports //
import { Link as RouterLink } from "react-router-dom";

const QuestionCard = (props: any) => {
  const avatar = useAvatar(props.avatar);
  const context = useContext(ThemeContext);

  const mobileView = (
    <Stack divider={<Divider flexItem />}>
      <Typography variant="h5" component="h2" sx={{ padding: "0.5rem" }}>
        {props.author} Asks:
      </Typography>
      <Stack>
        <Typography variant="h6" component="p" sx={{ padding: "0.5rem" }}>
          Would you rather...
        </Typography>
        <Stack direction="row">
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{ padding: "0.5rem" }}
          >
            <Avatar
              sx={{
                width: "6rem",
                height: "6rem",
              }}
            >
              {avatar}
            </Avatar>
          </Stack>
          <Stack
            justifyContent="space-between"
            sx={{ padding: "0.5rem", width: "100%" }}
          >
            <Typography align="center" variant="h5" component="p">
              {props.option1.length < 40
                ? props.option1
                : props.option1.slice(0, 37) + "..."}
            </Typography>
            <Typography align="center" variant="h6" component="p">
              -- Or --
            </Typography>
            <Button
              component={RouterLink}
              to={`/questions/${props.id}`}
              variant="contained"
              sx={{ width: "50%", margin: "0 auto" }}
            >
              Display
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );

  const largeView = (
    <Stack divider={<Divider flexItem />}>
      <Typography variant="h5" component="h2" sx={{ padding: "1rem" }}>
        {props.author} Asks:
      </Typography>
      <Stack direction="row">
        <Stack alignItems="center" justifyContent="center">
          <Avatar
            variant="square"
            sx={{
              width: "12rem",
              maxWidth: "30vw",
              height: "12rem",
              maxHeight: "30vw",
            }}
          >
            {avatar}
          </Avatar>
        </Stack>
        <Stack sx={{ padding: "1rem", width: "100%" }}>
          <Typography variant="h6" component="p">
            Would you rather...
          </Typography>
          <Typography
            align="center"
            variant="h5"
            component="p"
            sx={{ margin: "auto 0" }}
          >
            {props.option1.length < 60
              ? props.option1
              : props.option1.slice(0, 57) + "..."}
          </Typography>
          <Typography align="center" variant="h6" component="p">
            -- Or --
          </Typography>
          <Button
            component={RouterLink}
            to={`/questions/${props.id}`}
            variant="contained"
            sx={{ width: "50%", margin: "0 auto", textTransform: "none" }}
          >
            Display
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );

  return (
    <Card raised sx={{ marginBottom: "1rem" }}>
      {context.isMobile ? mobileView : largeView}
    </Card>
  );
};

export default QuestionCard;
