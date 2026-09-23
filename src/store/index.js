import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter-slice";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: { counter: counterSlice, auth: authSlice },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
