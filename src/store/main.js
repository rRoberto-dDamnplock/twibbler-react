import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login-slice";
import userReducer from './user-slice'
import postReducer from './post-slice'
const store = configureStore({
  reducer: { login: loginReducer, user: userReducer, post: postReducer }
});

export default store;
