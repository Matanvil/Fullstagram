import { createSlice } from "@reduxjs/toolkit";

const initialUIState = { showModal: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    showModal(state) {
      state.showModal = true;
    },
    HideModal(state) {
      state.showModal = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
