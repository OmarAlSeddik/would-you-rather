// mui imports //
import { Tabs, Tab } from "@mui/material";
// hook imports //
import { useState, useEffect } from "react";
// routing imports //
import { Link as RouterLink, useLocation } from "react-router-dom";

const Navigation = () => {
  const pathname = useLocation().pathname;

  useEffect(() => {
    setPageValue(pathname);
  }, [pathname]);

  const [pageValue, setPageValue] = useState(pathname);

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
        to="/add"
        value="/add"
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
