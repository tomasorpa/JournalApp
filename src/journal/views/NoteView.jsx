import {
  DeleteOutlined,
  SaveOutlined,
  UploadOutlined,
} from "@mui/icons-material";
import { Button, Grid, Typography, TextField, IconButton } from "@mui/material";
import { useEffect, useMemo, useRef } from "react";
import { ImageGallery } from "../components/ImageGallery";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks";
import {
  setActiveNote,
  startDeletingNote,
  startUpdatingNote,
  startUploadingFiles,
} from "../../store";
import Swal from "sweetalert2";

export const NoteView = () => {
  const { active: activeNote, savedMessage } = useSelector(
    (state) => state.journal
  );
  const { onInputChange, body, title, date, formState } = useForm(activeNote);
  const formattedDate = useMemo(() => {
    const newDate = new Date(date).toUTCString();
    return newDate;
  }, [date]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (savedMessage.length > 0) {
      Swal.fire({
        title: "Note saved!",
        text: `${title} was successfully saved!`,
        icon: "success",
      });
    }
  }, [savedMessage]);

  const onUpdatingNote = () => {
    dispatch(startUpdatingNote());
  };
  const onFileInputChange = ({ target }) => {
    if (target.files == 0) return;
    dispatch(startUploadingFiles(target.files));
  };
  const fileInputRef = useRef();
  const handleOnDeleteNote = () => {
    dispatch(startDeletingNote());
  };
  return (
    <Grid
      container
      gap={1}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid container alignItems="center" justifyContent="space-between">
        <Typography fontSize={30} fontWeight="light">
          {formattedDate}
        </Typography>
        <Grid
          container
          sx={{
            justifyContent: {
              xs: "flex-start",
              md: "flex-end",
            },
          }}
        >
          <IconButton
            onClick={handleOnDeleteNote}
            sx={{
              "&:hover": {
                color: "error.main",
                transition: " color 0.2s ease",
              },
            }}
          >
            <DeleteOutlined />
          </IconButton>
          <input
            type="file"
            multiple
            onChange={onFileInputChange}
            style={{ display: "none" }}
            ref={fileInputRef}
          />
          <IconButton
            color="primary"
            onClick={() => fileInputRef.current.click()}
          >
            <UploadOutlined />
          </IconButton>
          <Button onClick={onUpdatingNote} disabled={!!savedMessage}>
            <SaveOutlined />
            <Typography ml={0.5} fontSize={14}>
              Save
            </Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            type="text"
            fullWidth
            label="Title"
            variant="filled"
            sx={{ mb: 1 }}
            name="title"
            onInput={onInputChange}
            value={title}
          />
          <TextField
            type="text"
            variant="filled"
            fullWidth
            label="Description"
            multiline
            minRows={5}
            placeholder="What happened today?"
            name="body"
            onInput={onInputChange}
            value={body}
          />
        </Grid>
      </Grid>
      <ImageGallery images={activeNote.imageUrls} />
    </Grid>
  );
};
