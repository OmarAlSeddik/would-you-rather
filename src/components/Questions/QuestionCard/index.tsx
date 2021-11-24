// mui imports //
import { Card } from "@mui/material";
// local component imports //
import MobileView from "./MobileView";
import LargeView from "./LargeView";
// hook imports //
import useAvatar from "../../../hooks/useAvatar";
import { useContext } from "react";
// context imports //
import ThemeContext from "../../../context/ThemeContext";

const QuestionCard = (props: any) => {
  const avatar = useAvatar(props.avatar);
  const context = useContext(ThemeContext);

  return (
    <Card raised sx={{ marginBottom: "1rem" }}>
      {context.isMobile ? (
        <MobileView
          avatar={avatar}
          id={props.id}
          author={props.author}
          option1={props.option1}
        />
      ) : (
        <LargeView
          avatar={avatar}
          id={props.id}
          author={props.author}
          option1={props.option1}
        />
      )}
    </Card>
  );
};

export default QuestionCard;
