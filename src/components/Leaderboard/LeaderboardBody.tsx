import { TableBody, Avatar } from "@mui/material";
import StyledTableRow from "./StyledTableRow";
import StyledTableCell from "./StyledTableCell";

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

  return (
    <TableBody>
      {userbase.map((user: any) => (
        <StyledTableRow
          key={user.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <StyledTableCell align="center">
            {(user.answers ? Object.keys(user.answers).length : 0) +
              (user.questions ? user.questions.length : 0)}
          </StyledTableCell>
          <StyledTableCell scope="row">
            <Avatar>{loadAvatar(user)}</Avatar>
          </StyledTableCell>
          <StyledTableCell component="th" scope="row">
            {user.username}
          </StyledTableCell>
          <StyledTableCell align="center">
            {user.answers ? Object.keys(user.answers).length : 0}
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
