// mui imports //
import { Stack, Typography } from "@mui/material";
// local component imports //
import Demo from "./Demo";
import Logo from "./Logo";
import SignInCard from "./SignInCard";
import SignUpCard from "./SignUpCard";
import Footnote from "./Footnote";
// redux imports //
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Auth = () => {
  const isSignIn = useSelector((state: RootState) => state.auth.isSignIn);

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
      {isSignIn ? <SignInCard /> : <SignUpCard />}
      <Footnote isSignIn={isSignIn} />
    </Stack>
  );
};

export default Auth;
