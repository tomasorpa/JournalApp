import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, Typography, TextField } from "@mui/material";
import { useEffect, useMemo } from "react";
import { ImageGallery } from "../components/ImageGallery";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks";
import { setActiveNote, startUpdatingNote } from "../../store";

export const NoteView = () => {
  const { active: activeNote } = useSelector((state) => state.journal);
  const { onInputChange, body, title, date,formState } = useForm(activeNote);
  const formattedDate = useMemo(() => {
    const newDate = new Date(date).toUTCString()
    return newDate
  }, [date])

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);
  const onUpdatingNote = () => {
    dispatch(startUpdatingNote())
  }

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
        <Grid item>
          <Button onClick={onUpdatingNote}>
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
      <ImageGallery />
    </Grid>
  );
};
