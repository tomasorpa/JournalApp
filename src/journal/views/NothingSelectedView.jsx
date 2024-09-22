import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const NothingSelectedView = () => {
  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      sx={{
        backgroundColor: "primary.main",
        minHeight: "calc(100vh - 113px)",
        borderRadius: 2,
      }}
    >
      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 30, color: "white" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" color="white">
          Select or create a note
        </Typography>
      </Grid>
    </Grid>
  );
};
