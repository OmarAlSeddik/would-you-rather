import { createSlice } from "@reduxjs/toolkit";

const initialState = { isSignIn: true, isLoggedIn: false };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleAuthMode(state) {
      state.isSignIn = !state.isSignIn;
    },
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
