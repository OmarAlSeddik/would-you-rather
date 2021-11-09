import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Paper,
  Avatar,
  Button,
  Stack,
} from "@mui/material";
import QuestionAnswerTwoToneIcon from "@mui/icons-material/QuestionAnswerTwoTone";

const Header = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar color="default">
      <Paper>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ width: "90%", margin: "0 auto" }}
        >
          <QuestionAnswerTwoToneIcon fontSize="large" color="primary" />
          <Typography
            variant="h4"
            component="h1"
            color="primary"
            sx={{ fontFamily: "Lobster" }}
          >
            Would You Rather?
          </Typography>
          <Button
            disableRipple
            sx={{ marginLeft: "auto", textTransform: "capitalize" }}
          >
            <Avatar
              alt="Omar Al Seddik"
              src="/static/images/avatar/1.jpg"
              sx={{ marginRight: 1 }}
            />
            Omar Al Seddik
          </Button>
        </Stack>
      </Paper>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        sx={{
          width: { xs: "100%", sm: "35rem" },
          ".MuiTabs-indicator": {
            height: "100%",
            backgroundColor: "secondary.main",
          },
        }}
      >
        <Tab
          label="home"
          disableRipple
          sx={{
            textTransform: "capitalize",
            "&:hover": { color: "primary.main" },
          }}
        />
        <Tab
          label="add a question"
          disableRipple
          sx={{
            textTransform: "capitalize",
            "&:hover": { color: "primary.main" },
          }}
        />
        <Tab
          label="leaderboard"
          disableRipple
          sx={{
            textTransform: "capitalize",
            "&:hover": { color: "primary.main" },
          }}
        />
      </Tabs>
    </AppBar>
  );
};

export default Header;
