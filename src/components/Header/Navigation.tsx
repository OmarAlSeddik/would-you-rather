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
        component={RouterLink}
        to="/"
        value="/"
      />
      <Tab
        label="add a question"
        disableRipple
        sx={{
          textTransform: "capitalize",
          "&:hover": { color: "primary.main" },
        }}
        component={RouterLink}
        to="/add-a-question"
        value="/add-a-question"
      />
      <Tab
        label="leaderboard"
        disableRipple
        sx={{
          textTransform: "capitalize",
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
