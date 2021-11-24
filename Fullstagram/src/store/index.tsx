import { configureStore } from "@reduxjs/toolkit";
import loginReducers from "./login-slice";

const store = configureStore({
  reducer: {login: loginReducers}
});

export type RootState = ReturnType<typeof store.getState>

export default store;
