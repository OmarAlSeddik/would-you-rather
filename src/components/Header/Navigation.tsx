import useStickyState from "../../hooks/useStickyState";

import { Tabs, Tab } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  const [pageValue, setPageValue] = useStickyState(0, "page");
  const handlePageChange = (event: React.ChangeEvent<{}>, newValue: number) => {
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
      />
    </Tabs>
  );
};

export default Navigation;
