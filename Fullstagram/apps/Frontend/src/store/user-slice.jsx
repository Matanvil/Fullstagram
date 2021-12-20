import { createSlice } from "@reduxjs/toolkit";

const initialUserState = { name: '', username: '', email: ''};

const userslice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name,
      state.username = action.payload.username,
      state.email = action.payload.email
    },
  },
});

export const userActions = userslice.actions;

export default userslice.reducer;
