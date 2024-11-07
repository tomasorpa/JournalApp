import {
  Box,
  Divider,
  Drawer,
  List,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useSelector } from "react-redux";
import { SideBarItem } from "./SideBarItem";
import { useTheme } from "@emotion/react";

export const SideBar = ({ drawerWidth }) => {
  const { displayName } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);
  const { open } = useSelector((state) => state.navBar);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Cambia la variante dependiendo del ancho de la pantalla
  const variant = isSmallScreen ? "temporary" : "permanent";
  return (
    <Box
      component={"nav"}
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        variant={variant}
        open={open}
        sx={{
          display: { sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6">{displayName}</Typography>
        </Toolbar>
        <Divider />
        <List>
          {notes.map((note, id) => (
            <SideBarItem key={id} {...note} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
