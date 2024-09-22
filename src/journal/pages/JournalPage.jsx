import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />
      <IconButton
        sx={{
          position: "fixed",
          color: "white",
          right: 50,
          bottom: 50,
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
        }}
      >
        <AddOutlined />
      </IconButton>
    </JournalLayout>
  );
};
