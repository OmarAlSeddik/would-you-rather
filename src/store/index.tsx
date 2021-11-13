import { configureStore } from "@reduxjs/toolkit";
import { authenticationReducer as authentication } from "./authentication";
import { userbaseReducer as userbase } from "./userbase";
import { questionsReducer as questions } from "./questions";

const store = configureStore({
  reducer: { authentication, userbase, questions },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
