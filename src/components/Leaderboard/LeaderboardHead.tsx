import { TableHead, Stack } from "@mui/material";
import StyledTableRow from "./StyledTableRow";
import StyledTableCell from "./StyledTableCell";

import StarRoundedIcon from "@mui/icons-material/StarRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const LeaderboardHead = () => {
  const context = useContext(ThemeContext);

  return (
    <TableHead>
      <StyledTableRow>
        <StyledTableCell align="center">
          <Stack direction="row" justifyContent="center">
            <StarRoundedIcon />
            {context.isMobile ? null : "Score"}
          </Stack>
        </StyledTableCell>
        <StyledTableCell colSpan={2} align="center">
          <Stack direction="row" alignContent="center" justifyContent="center">
            <PersonRoundedIcon />
            {context.isMobile ? null : "User"}
          </Stack>
        </StyledTableCell>
        <StyledTableCell>
          <Stack direction="row" justifyContent="center">
            <CheckRoundedIcon />
            {context.isMobile ? null : "Answered"}
          </Stack>
        </StyledTableCell>
        <StyledTableCell>
          <Stack direction="row" justifyContent="center">
            <CreateRoundedIcon />
            {context.isMobile ? null : "Created"}
          </Stack>
        </StyledTableCell>
      </StyledTableRow>
    </TableHead>
  );
};

export default LeaderboardHead;
