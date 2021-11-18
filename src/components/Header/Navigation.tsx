import { useState } from "react";

import { Tabs, Tab } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const [pageValue, setPageValue] = useState(location.pathname);
  const handlePageChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setPageValue(newValue);
  };

  return (
    <Tabs
      value={pageValue}
      onChange={handlePageChange}
      variant="fullWidth"
      sx={{
        width: "35rem",
        maxWidth: "100vw",
        ".MuiTabs-indicator": {
          height: "100%",
          backgroundColor: "secondary.main",
        },
      }}
    >
      <Tab
        label="Home"
        disableRipple
        sx={{
          textTransform: "none",
          "&:hover": { color: "primary.main" },
        }}
        component={RouterLink}
        to="/"
        value="/"
      />
      <Tab
        label="Ask a Question"
        disableRipple
        sx={{
          textTransform: "none",
          "&:hover": { color: "primary.main" },
        }}
        component={RouterLink}
        to="/ask-a-question"
        value="/ask-a-question"
      />
      <Tab
        label="Leaderboard"
        disableRipple
        sx={{
          textTransform: "none",
          "&:hover": { color: "primary.main" },
        }}
        component={RouterLink}
        to="/leaderboard"
        value="/leaderboard"
      />
    </Tabs>
  );
};

export default Navigation;
