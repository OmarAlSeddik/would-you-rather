import { userbaseReducer as userbase } from "./userbase";
import { questionsReducer as questions } from "./questions";
import { authReducer as auth } from "./auth";
import { avatarsReducer as avatars } from "./avatars";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { auth, userbase, questions, avatars },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
