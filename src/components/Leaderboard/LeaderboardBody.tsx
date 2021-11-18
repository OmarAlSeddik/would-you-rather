import { TableBody, Avatar } from "@mui/material";
import StyledTableRow from "./StyledTableRow";
import StyledTableCell from "./StyledTableCell";

import { useSelector } from "react-redux";
import { RootState } from "../../store";

const LeaderboardBody = () => {
  const userbase = useSelector((state: RootState) => state.userbase);

  return (
    <TableBody>
      {userbase.map((user: any) => (
        <StyledTableRow
          key={user.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <StyledTableCell align="center">
            {Object.keys(user.answers).length + user.questions.length}
          </StyledTableCell>
          <StyledTableCell scope="row">
            <Avatar
              src={user.avatarURL}
              sx={{ width: "2rem", height: "2rem" }}
            />
          </StyledTableCell>
          <StyledTableCell component="th" scope="row">
            {user.name}
          </StyledTableCell>
          <StyledTableCell align="center">
            {Object.keys(user.answers).length}
          </StyledTableCell>
          <StyledTableCell align="center">
            {user.questions.length}
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  );
};

export default LeaderboardBody;
