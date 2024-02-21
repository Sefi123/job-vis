import { configureStore } from "@reduxjs/toolkit";
import Auth from "./auth";

export const store = configureStore({
  reducer: { auth: Auth },
});
