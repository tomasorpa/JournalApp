import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store";

export const JournalPage = () => {
  const dispatch = useDispatch();
  const onClickNewNote = () => {
    dispatch(startNewNote());
  };
  const { isSaving, active } = useSelector((state) => state.journal);
  return (
    <JournalLayout>
      {(!!active) ? <NoteView /> : <NothingSelectedView />}
      <IconButton
        onClick={onClickNewNote}
        sx={{
          position: "fixed",
          color: "white",
          right: 50,
          bottom: 50,
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
        }}
        disabled={isSaving}
      >
        <AddOutlined />
      </IconButton>
    </JournalLayout>
  );
};
