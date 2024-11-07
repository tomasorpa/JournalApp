import { createSlice } from "@reduxjs/toolkit";
import { formatString } from "../../helpers";

export const journalSlice = createSlice({
  name: "journalSlice",
  initialState: {
    isSaving: false,
    savedMessage: "",
    notes: [],
    active: null,

    /*  active:{
        id:"abc123",
        title:"",
        body:"",
        date:123445,
        
    }*/
  },
  reducers: {
    addNewEmptyNote: (state, { payload }) => {
      state.notes.push(payload);
      state.isSaving = false;
    },
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    deleteNoteById: (state, { payload }) => {
      state.notes = state.notes.filter((note) => note.id !== payload);
      state.active = null;
    },
    updateNote: (state, { payload }) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id == payload.id) {
          return payload;
        }
        return note;
      });
      state.savedMessage = `${formatString(
        payload.title,
        20
      )} was saved successully`;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.savedMessage = "";
    },
    setNotes: (state, { payload }) => {
      state.notes = payload;
    },
    setActiveNote: (state, { payload }) => {
      state.active = payload;
      state.savedMessage = "";
    },
    setPhotosUrlsToActiveNotes: (state, { payload }) => {
      state.active.imageUrls = [...state.active.imageUrls, ...payload];
      state.isSaving = false;
    },
  },
  clearNotesLogout: (state) => {
    (state.isSaving = false),
      (state.savedMessage = ""),
      (state.notes = []),
      (state.active = null);
  },
});

export const {
  addNewEmptyNote,
  clearNotesLogout,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosUrlsToActiveNotes,
  setSaving,
  updateNote,
} = journalSlice.actions;
