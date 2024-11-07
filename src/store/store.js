import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { journalSlice } from "./journal";
import { navBarSlice } from "./journal/navBarSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    journal: journalSlice.reducer,
    navBar: navBarSlice.reducer,
  },
});
