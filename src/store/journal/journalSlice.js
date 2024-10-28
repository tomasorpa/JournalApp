import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journalSlice",
  initialState: {
    isSaving: false,
    savedMessage: "",
    notes: [],
    active: null,
    imageUrls: [],
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
    deleteNoteById: (state, { payload }) => {},
    updateNote: (state, { payload }) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id == payload.id) {
          return payload;
        }
        return note;
      });
    },
    setSaving: (state) => {
      state.isSaving = true;
    },
    setNotes: (state, { payload }) => {
      state.notes = payload;
    },
    setActiveNote: (state, { payload }) => {
      state.active = payload;
    },
  },
});

export const {
  addNewEmptyNote,
  deleteNoteById,
  updateNote,
  setSaving,
  setNotes,
  setActiveNote,
  savingNewNote,
} = journalSlice.actions;
