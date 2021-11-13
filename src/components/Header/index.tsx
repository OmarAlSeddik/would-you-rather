import { AppBar } from "@mui/material";
import Head from "./Head";
import Navigation from "./Navigation";

import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Header = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.authentication.isAuthenticated
  );

  const visible = (
    <AppBar color="default" position="sticky" sx={{ borderRadius: 0 }}>
      <Head />
      <Navigation />
    </AppBar>
  );

  return <>{isAuthenticated ? visible : null}</>;
};

export default Header;
