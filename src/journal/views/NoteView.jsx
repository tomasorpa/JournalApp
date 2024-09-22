import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, Typography, TextField } from "@mui/material";
import React from "react";
import { ImageGallery } from "../components/ImageGallery";

export const NoteView = () => {
  return (
    <Grid
      container
      gap={1}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid container alignItems="center" justifyContent="space-between">
        <Typography fontSize={30} fontWeight="light">
          August 08,2024
        </Typography>
        <Grid item>
          <Button>
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
          />
          <TextField
            type="text"
            variant="filled"
            fullWidth
            label="Description"
            multiline
            minRows={5}
            placeholder="What happened today?"
          />
        </Grid>
      </Grid>
      <ImageGallery />
    </Grid>
  );
};
