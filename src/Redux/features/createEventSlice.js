import { createSlice } from "@reduxjs/toolkit";
import { TbRuler2 } from "react-icons/tb";

const createEventSlice = createSlice({
  name: "createEventSlice",
  initialState: {
    open: true,
    error: "",
    loading: false,
  },

  reducers: {
    openEvent: (state, action) => {
      state.open = action.payload;
    },

    closeEvent: (state, action) => {
      state.open = !action.payload;
    },
  },
});

export const { openEvent, closeEvent } = createEventSlice.actions;

export default createEventSlice.reducer;
