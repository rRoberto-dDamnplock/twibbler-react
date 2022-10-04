import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login-slice";
import userReducer from './user-slice'

const store = configureStore({
  reducer: { login: loginReducer, user: userReducer }
});

export default store;
