import { configureStore } from "@reduxjs/toolkit";
import loginReducers from "./login-slice";

const store = configureStore({
  reducer: {login: loginReducers} ,
});

export default store;
