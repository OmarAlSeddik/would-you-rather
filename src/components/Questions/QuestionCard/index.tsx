import { Card } from "@mui/material";

import CardHead from "./CardHead";
import CardBody from "./CardBody";

const QuestionCard = (props: any) => {
  return (
    <Card raised sx={{ margin: "1rem 2rem" }}>
      <CardHead author={props.author} avatar={props.avatar} />
      <CardBody option1={props.option1} id={props.id} />
    </Card>
  );
};

export default QuestionCard;
