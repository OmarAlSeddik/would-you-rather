import { Card, Grid, Typography, Stack, Divider } from "@mui/material";

const Leaderboard = () => {
  const gridCells = ["score", "user", "answered", "created"];

  return (
    <Card
      raised
      sx={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "21rem",
      }}
    >
      <Stack>
        <Typography variant="h4" component="h1" align="center">
          Leaderboard
        </Typography>
        <Divider />
        <Grid container>
          {gridCells.map((cell: string) => (
            <Grid item xs={3}>
              {cell}
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Card>
  );
};

export default Leaderboard;
