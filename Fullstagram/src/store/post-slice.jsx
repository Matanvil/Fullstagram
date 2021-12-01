import { createSlice } from "@reduxjs/toolkit";

const initialPostSlice = { image: undefined };

const postSlice = createSlice({
  name: "post",
  initialState: initialPostSlice,
  reducers: {
    addImage(state, action) {
      state.image = action.payload.image;
    },
  },
});

export const postActions = postSlice.actions;

export default postSlice.reducer;
