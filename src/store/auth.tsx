import { createSlice } from "@reduxjs/toolkit";

const initialState = { loggedInUserId: "" };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.loggedInUserId = action.payload.user.uid && action.payload.user.uid;
    },
    logout(state) {
      state.loggedInUserId = "";
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
