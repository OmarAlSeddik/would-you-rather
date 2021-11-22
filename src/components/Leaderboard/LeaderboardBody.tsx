// mui imports //
import { TableBody, Avatar } from "@mui/material";
// local component imports //
import StyledTableRow from "./StyledTableRow";
import StyledTableCell from "./StyledTableCell";
// redux imports //
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const LeaderboardBody = () => {
  const userbase = useSelector((state: RootState) => state.userbase);
  const avatars = useSelector((state: RootState) => state.avatars);
  const loadAvatar = (user: any) => {
    const loadedAvatarObject = avatars.find(
      (avatarObject) => avatarObject.value === user.avatar
    );

    return loadedAvatarObject?.label;
  };

  const sortedUserbase = userbase
    .slice()
    .sort(
      (user1: any, user2: any) =>
        (user2.votes ? Object.keys(user2.votes).length : 0) +
        (user2.questions ? user2.questions.length : 0) -
        ((user1.votes ? Object.keys(user1.votes).length : 0) +
          (user1.questions ? user1.questions.length : 0))
    );

  return (
    <TableBody>
      {sortedUserbase.map((user: any) => (
        <StyledTableRow
          key={user.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <StyledTableCell align="center">
            {(user.votes ? Object.keys(user.votes).length : 0) +
              (user.questions ? user.questions.length : 0)}
          </StyledTableCell>
          <StyledTableCell scope="row">
            <Avatar>{loadAvatar(user)}</Avatar>
          </StyledTableCell>
          <StyledTableCell component="th" scope="row">
            {user.username}
          </StyledTableCell>
          <StyledTableCell align="center">
            {user.votes ? Object.keys(user.votes).length : 0}
          </StyledTableCell>
          <StyledTableCell align="center">
            {user.questions ? user.questions.length : 0}
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  );
};

export default LeaderboardBody;
