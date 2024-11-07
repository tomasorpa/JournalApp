import { TurnedInNot } from "@mui/icons-material";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";
import { formatString } from "../../helpers";
import { setOpenFalse } from "../../store/journal/navBarSlice";
export const SideBarItem = ({ id, date, title = "", body, imageUrls = [] }) => {
  // eslint-disable-next-line react/prop-types
  const formattedTitle = formatString(title, 14);
  const formattedBody = formatString(body, 30);

  const dispatch = useDispatch();
  const onSetActiveNote = () => {
    dispatch(setActiveNote({ id, date, title, body, imageUrls }));
    dispatch(setOpenFalse());
  };

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onSetActiveNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <ListItemText primary={formattedTitle} secondary={formattedBody} />
      </ListItemButton>
    </ListItem>
  );
};
