import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    // replaceQuestions: (state, action) => (state = action.payload),
    // addQuestion: (state, action) => {
    //   const newQuestion = action.payload;
    //     state.push({
    //       id: newQuestion.id,
    //       username: newUser.username,
    //       avatar: newUser.avatar,
    //       answers: newUser.answers,
    //       questions: newUser.questions,
    //     });
    //   }
    // },
  },
});

export const questionsActions = questionsSlice.actions;
export const questionsReducer = questionsSlice.reducer;
