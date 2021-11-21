import { createSlice } from "@reduxjs/toolkit";

const initialState = { isSignIn: true, isLoggedIn: false, loggedInUserId: "" };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleAuthMode(state) {
      state.isSignIn = !state.isSignIn;
    },
    login(state, action) {
      state.isLoggedIn = true;
      state.loggedInUserId = action.payload.user.uid && action.payload.user.uid;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.loggedInUserId = "";
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
