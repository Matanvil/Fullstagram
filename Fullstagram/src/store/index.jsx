import { configureStore } from "@reduxjs/toolkit";
import loginReducers from "./login-slice";
import uiReducers from "./ui-slice";
import postReducers from "./post-slice";

const store = configureStore({
  reducer: { login: loginReducers, ui: uiReducers, post: postReducers },
});

export default store;
