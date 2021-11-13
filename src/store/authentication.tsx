import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: true };

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authenticationActions = authenticationSlice.actions;
export const authenticationReducer = authenticationSlice.reducer;
