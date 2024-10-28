import { TurnedInNot } from "@mui/icons-material";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";
export const SideBarItem = ({ id,date,title, body }) => {
  // eslint-disable-next-line react/prop-types
  const formattedTitle =
    title.length > 17 ? `${title.substring(0, 12)}...` : title;
    const formattedBody = body.length > 30 ? `${body.substring(0, 50)}...` : body;
    
    const dispatch=useDispatch()
    const onSetActiveNote = () => {
        dispatch(setActiveNote({id,date,title,body}))
    }
  return (
    <ListItem
      disablePadding
     
    >
      <ListItemButton onClick={onSetActiveNote} >
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <ListItemText primary={formattedTitle} secondary={formattedBody} />
      </ListItemButton>
    </ListItem>
  );
};
