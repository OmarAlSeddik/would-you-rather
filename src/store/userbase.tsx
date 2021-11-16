import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [
  {
    id: "sarahedo",
    name: "Sarah Edo",
    avatarURL: "https://semantic-ui.com/images/avatar2/large/molly.png",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  },
  {
    id: "tylermcginnis",
    name: "Tyler McGinnis",
    avatarURL: "https://semantic-ui.com/images/avatar2/large/matthew.png",
    answers: {
      vthrdm985a262al8qx3do: "optionOne",
      xj352vofupe1dqz9emx13r: "optionTwo",
    },
    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
  },
  {
    id: "johndoe",
    name: "John Doe",
    avatarURL: "https://semantic-ui.com/images/avatar/large/elliot.jpg",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  },
];

const userbaseSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const usersbaseActions = userbaseSlice.actions;
export const userbaseReducer = userbaseSlice.reducer;
