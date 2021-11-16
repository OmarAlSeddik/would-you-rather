import { AppBar } from "@mui/material";
import Head from "./Head";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <AppBar color="default" position="sticky" sx={{ borderRadius: 0 }}>
      <Head />
      <Navigation />
    </AppBar>
  );
};

export default Header;
