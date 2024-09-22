import { CircularProgress, Grid } from "@mui/material";

export const CheckingAuth = () => {
  return (
    <Grid
      container
      spacing={0}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.300",
        padding: 8,
        color: "primary.main",
      }}
    >
      <Grid item>
        <CircularProgress color="error" />
      </Grid>
    </Grid>
  );
};
