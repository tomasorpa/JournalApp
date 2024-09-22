import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = "" }) => {
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
      <Grid
        item
        className="box-shadow"
        p={2}
        xs={12}
        sm={7}
        md={5}
        sx={{ backgroundColor: "#fff", borderRadius: "10px" }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};
