import { createSlice } from "@reduxjs/toolkit";

export const navBarSlice = createSlice({
  name: "navBarSlice",
  initialState: {
    open: false,
  },
  reducers: {
    setOpenFalse: (state) => {
      state.open = false;
    },
    setOpenTrue: (state) => {
      state.open = true;
    },
  },
});

export const { setOpenFalse, setOpenTrue } = navBarSlice.actions;
