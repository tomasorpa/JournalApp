import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  Toolbar,
  Typography,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useSelector } from "react-redux";

export const SideBar = ({ drawerWidth }) => {
  const { displayName } =useSelector((state)=>state.auth)
  return (
    <Box
      component={"nav"}
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        variant="permanent"
        open={true}
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
          {[
            "January",
            "February",
            "March",
            "April",
            "January",
            "February",
            "March",
            "April",
          ].map((item, i) => (
            <ListItem key={i} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <ListItemText
                  primary={item}
                  secondary="Lorem ipsum dolor sit amet."
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
