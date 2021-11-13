import { Stack } from "@mui/material";
import LoginCard from "./LoginCard";
import Logo from "./Logo";

const Login = () => {
  return (
    <Stack justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
      <Logo />
      <LoginCard />
    </Stack>
  );
};

export default Login;
