// mui imports //
import { Typography, Stack, Link } from "@mui/material";

const Footnote = (props: any) => {
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

  return props.isSignIn ? forgotPassword : avatarCredit;
};

export default Footnote;
