import { configureStore } from "@reduxjs/toolkit";
import loginReducers from "./login-slice";
import uiReducers from "./ui-slice";

const store = configureStore({
  reducer: { login: loginReducers, ui: uiReducers },
});

export default store;
