import { Card } from "@mui/material";

import CardHead from "./CardHead";
import CardBody from "./CardBody";

const Question = () => {
  return (
    <Card raised sx={{ margin: "1rem 2rem" }}>
      <CardHead />
      <CardBody />
    </Card>
  );
};

export default Question;
