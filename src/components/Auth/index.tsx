// mui imports //
import { Stack, Typography, Link } from "@mui/material";
// local component imports //
import Demo from "./Demo";
import Logo from "./Logo";
import SignInCard from "./SignInCard";
import SignUpCard from "./SignUpCard";
// redux imports //
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Auth = () => {
  const isSignIn = useSelector((state: RootState) => state.auth.isSignIn);

  const forgotPassword = (
    <Typography align="center" sx={{ padding: "1rem" }}>
      Forgot your password? Have a good think and try to remember.
    </Typography>
  );

  const avatarCredit = (
    <Stack alignItems="center">
      <Typography align="center" sx={{ padding: "1rem" }}>
        Avatar vectors created by:
        <Link
          href="https://www.freepik.com/pikisuperstar"
          color="#0d47a1"
          sx={{ marginLeft: "0.5rem" }}
        >
          pikisuperstar
        </Link>
      </Typography>
    </Stack>
  );

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
      }}
    >
      <Logo />
      <Demo />
      <Typography
        align="center"
        color="primary"
        variant="h5"
        component="p"
        sx={{ marginBottom: "1rem" }}
      >
        -- OR --
      </Typography>
      {isSignIn ? <SignInCard /> : <SignUpCard />}
      {isSignIn ? forgotPassword : avatarCredit}
    </Stack>
  );
};

export default Auth;
