import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui";

const initialState: any = [];

const userbaseSlice = createSlice({
  name: "userbase",
  initialState,
  reducers: {
    replaceUserbase: (state, action) => (state = action.payload),
    addUser: (state, action) => {
      const newUser = action.payload;
      const existingUser = state.find(
        (user: any) => user.email === newUser.email
      );
      if (!existingUser) {
        state.push({
          email: newUser.email,
          username: newUser.username,
          avatar: newUser.avatar,
          answers: newUser.answers,
          questions: newUser.questions,
        });
      }
    },
  },
});

export const userbaseActions = userbaseSlice.actions;
export const userbaseReducer = userbaseSlice.reducer;

export const fetchUserbaseData = () => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://would-you-rather-59208-default-rtdb.firebaseio.com/userbase.json"
      );
      if (!response.ok) {
        throw new Error("Could not fetch userbase data!");
      }
      const data = await response.json();
      return data ? data : [];
    };
    try {
      const userbaseData = await fetchData();
      dispatch(userbaseActions.replaceUserbase(userbaseData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching userbase data failed!",
        })
      );
    }
  };
};

export const sendUserbaseData = (userbase: any) => {
  return async (dispatch: any) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending userbase data!",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://would-you-rather-59208-default-rtdb.firebaseio.com/userbase.json",
        {
          method: "PUT",
          body: JSON.stringify(userbase),
        }
      );
      if (!response.ok) {
        throw new Error("Sending userbase data failed.");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent userbase data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending userbase data failed!",
        })
      );
    }
  };
};
