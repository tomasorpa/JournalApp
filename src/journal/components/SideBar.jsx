import {
  Box,
  Divider,
  Drawer,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { SideBarItem } from "./SideBarItem";

export const SideBar = ({ drawerWidth }) => {
  const { displayName } = useSelector((state) => state.auth)
  const { notes }=useSelector(state=>state.journal)
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
          {notes.map((note, id) => (
            <SideBarItem key={id} {...note} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
