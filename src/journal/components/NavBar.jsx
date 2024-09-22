import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { startLogoutFirebase } from "../../store";

export const NavBar = ({ drawerWidth = 240 }) => {
  const dispatch=useDispatch()
  const onLogout = () => {
    dispatch(startLogoutFirebase())
  }
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Journal App</Typography>
          <IconButton color="error" onClick={onLogout}>
            <LogoutOutlined  />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
