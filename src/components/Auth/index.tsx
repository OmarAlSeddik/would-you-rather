// mui imports //
import { Stack, Typography } from "@mui/material";
// local component imports //
import Demo from "./Demo";
import Logo from "./Logo";
import SignInCard from "./SignInCard";
import SignUpCard from "./SignUpCard";
import Footnote from "./Footnote";
// hook imports //
import useStickyState from "../../hooks/useStickyState";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useStickyState(true, "isSignIn");

  const handleToggleSignIn = () => {
    setIsSignIn((previous: boolean) => !previous);
  };

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh" }}
    >
      <Logo />
      <Demo />
      <Typography
        align="center"
        variant="h5"
        component="p"
        sx={{ marginBottom: "1rem" }}
      >
        -- OR --
      </Typography>
      {isSignIn ? (
        <SignInCard handleToggleSignIn={handleToggleSignIn} />
      ) : (
        <SignUpCard handleToggleSignIn={handleToggleSignIn} />
      )}
      <Footnote isSignIn={isSignIn} />
    </Stack>
  );
};

export default Auth;
