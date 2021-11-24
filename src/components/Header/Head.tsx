// mui imports //
import {
  Paper,
  Stack,
  Typography,
  Avatar,
  ButtonBase,
  Menu,
  MenuItem,
} from "@mui/material";
import QuestionAnswerTwoToneIcon from "@mui/icons-material/QuestionAnswerTwoTone";
import LogoutIcon from "@mui/icons-material/Logout";
// hook imports //
import { useState } from "react";
import useUser from "../../hooks/useUser";
// redux imports //
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

const Head = () => {
  const [user, avatar] = useUser();

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = anchorEl ? true : false;

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper sx={{ borderRadius: 0 }}>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ width: "90%", margin: "0 auto" }}
      >
        <QuestionAnswerTwoToneIcon color="primary" />
        <Typography
          variant="h5"
          component="h2"
          color="primary"
          sx={{ fontFamily: "Lobster" }}
        >
          Would You Rather?
        </Typography>
        <ButtonBase
          disableRipple
          sx={{
            padding: "0.5rem",
            marginLeft: "auto",
            textTransform: "capitalize",
          }}
          onClick={handleOpen}
        >
          <Avatar sx={{ marginRight: "0.5rem" }}>{avatar}</Avatar>
          <Typography sx={{ fontSize: { xs: "0.75rem", sm: "1rem" } }}>
            {user.username}
          </Typography>
        </ButtonBase>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={open}
          onClose={handleClose}
          sx={{ ".MuiMenu-list": { padding: 0 } }}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              handleLogout();
            }}
          >
            <Stack direction="row" justifyContent="space-between">
              <LogoutIcon
                fontSize="small"
                sx={{ marginRight: 1, color: "primary.main" }}
              />
              <Typography>Logout</Typography>
            </Stack>
          </MenuItem>
        </Menu>
      </Stack>
    </Paper>
  );
};

export default Head;
