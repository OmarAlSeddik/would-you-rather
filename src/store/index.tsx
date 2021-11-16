import { configureStore } from "@reduxjs/toolkit";
import { userbaseReducer as userbase } from "./userbase";
import { questionsReducer as questions } from "./questions";
import { authReducer as auth } from "./auth";

const store = configureStore({
  reducer: { auth, userbase, questions },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
