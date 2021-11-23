// mui imports //
import { AppBar } from "@mui/material";
// local component imports //
import Head from "./Head";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <AppBar
      color="default"
      position="fixed"
      sx={{ borderRadius: 0, maxWidth: "100vw" }}
    >
      <Head />
      <Navigation />
    </AppBar>
  );
};

export default Header;
