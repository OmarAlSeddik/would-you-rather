import { Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const CardBody = (props: any) => {
  return (
    <Stack sx={{ width: "90%", margin: "0 auto", padding: "2rem 0" }}>
      <Typography variant="h5" component="h2">
        Would you rather...
      </Typography>
      <Typography align="center">{props.option1}</Typography>
      <Typography align="center" variant="h6" component="p">
        Or...
      </Typography>
      <Button
        component={Link}
        to={`/questions/${props.id}`}
        variant="contained"
        sx={{ width: "6rem", margin: "0 auto" }}
      >
        Display
      </Button>
    </Stack>
  );
};

export default CardBody;
