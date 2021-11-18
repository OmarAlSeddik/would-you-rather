import { useState } from "react";

import {
  Stack,
  Typography,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

const CardBody = () => {
  const [value, setValue] = useState("option1");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Stack sx={{ width: "90%", margin: "0 auto", padding: "2rem 0" }}>
      <Typography variant="h5" component="h2">
        Would you rather...
      </Typography>
      <RadioGroup
        aria-label="gender"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="option1"
          control={<Radio />}
          label="Option 1."
        />
        <FormControlLabel
          value="option2"
          control={<Radio />}
          label="Option 2."
        />
      </RadioGroup>
      <Button variant="contained" sx={{ width: "6rem", margin: "0 auto" }}>
        Answer
      </Button>
    </Stack>
  );
};

export default CardBody;
