import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Demo from "./Demo";
import Logo from "./Logo";
import SignInCard from "./SignInCard";
import SignUpCard from "./SignUpCard";

const Auth = () => {
  const isSignIn = useSelector((state: RootState) => state.auth.isSignIn);

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "100vh",
        minHeight: "700px",
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
    </Stack>
  );
};

export default Auth;
