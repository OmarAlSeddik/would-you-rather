import {
  Card,
  Typography,
  Stack,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
} from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Leaderboard = () => {
  const userbase = useSelector((state: RootState) => state.userbase);
  const context = useContext(ThemeContext);

  return (
    <Card
      raised
      sx={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Stack>
        <Typography
          variant="h5"
          component="h1"
          align="center"
          sx={{
            padding: "1rem 0",
            color: "white",
            backgroundColor: "primary.main",
          }}
        >
          Leaderboard
        </Typography>
        <Divider />
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <Stack direction="row" alignContent="center">
                  <StarRoundedIcon />
                  {context.isMobile ? null : "Score"}
                </Stack>
              </TableCell>
              <TableCell colSpan={2} align="center">
                <Stack
                  direction="row"
                  alignContent="center"
                  justifyContent="center"
                >
                  <PersonRoundedIcon />
                  {context.isMobile ? null : "User"}
                </Stack>
              </TableCell>
              <TableCell>
                <Stack direction="row" alignContent="center">
                  <CheckRoundedIcon />
                  {context.isMobile ? null : "Answered"}
                </Stack>
              </TableCell>
              <TableCell>
                <Stack direction="row" alignContent="center">
                  <CreateRoundedIcon />
                  {context.isMobile ? null : "Created"}
                </Stack>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userbase.map((user: any) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  {Object.keys(user.answers).length + user.questions.length}
                </TableCell>
                <TableCell scope="row">
                  <Avatar
                    src={user.avatarURL}
                    sx={{ width: "2rem", height: "2rem" }}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="center">
                  {Object.keys(user.answers).length}
                </TableCell>
                <TableCell align="center">{user.questions.length}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Stack>
    </Card>
  );
};

export default Leaderboard;
