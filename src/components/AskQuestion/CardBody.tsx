import { Stack, Typography, TextField, Button } from "@mui/material";

const CardBody = () => {
  return (
    <Stack sx={{ width: "90%", margin: "0 auto", padding: "2rem 0" }}>
      <Typography variant="h5" component="h2" sx={{ marginBottom: "0.25rem" }}>
        Would you rather...
      </Typography>
      <TextField
        size="small"
        placeholder="First option."
        sx={{ marginBottom: "0.5rem" }}
      />
      <TextField
        size="small"
        placeholder="Second option."
        sx={{ marginBottom: "1rem" }}
      />
      <Button variant="contained" sx={{ width: "6rem", margin: "0 auto" }}>
        Ask
      </Button>
    </Stack>
  );
};

export default CardBody;
