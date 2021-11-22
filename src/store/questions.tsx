import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui";

const initialState: any = [];

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    replaceQuestions: (state, action) => (state = action.payload),

    addQuestion: (state, action) => {
      const newQuestion = action.payload;
      state.unshift({
        id: newQuestion.id,
        author: newQuestion.author,
        date: newQuestion.date,
        avatar: newQuestion.avatar,
        option1: newQuestion.option1,
        option2: newQuestion.option2,
      });
    },

    addVote: (state, action) => {
      const userId = action.payload.userId;
      const questionId = action.payload.questionId;
      const option = action.payload.option;
      const question = state.find(
        (question: any) => question.id === questionId
      );
      if (option === "1") {
        question.option1Votes
          ? question.option1Votes.push(userId)
          : (question.option1Votes = [userId]);
      }
      if (option === "2") {
        question.option2Votes
          ? question.option2Votes.push(userId)
          : (question.option2Votes = [userId]);
      }
    },
  },
});

export const questionsActions = questionsSlice.actions;
export const questionsReducer = questionsSlice.reducer;

export const fetchQuestionsData = () => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://would-you-rather-59208-default-rtdb.firebaseio.com/questions.json"
      );
      if (!response.ok) {
        throw new Error("Could not fetch questions data!");
      }
      const data = await response.json();
      return data ? data : [];
    };
    try {
      const questionsData = await fetchData();
      dispatch(questionsActions.replaceQuestions(questionsData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching questions data failed!",
        })
      );
    }
  };
};

export const sendQuestionsData = (questions: any) => {
  return async (dispatch: any) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending questions data!",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://would-you-rather-59208-default-rtdb.firebaseio.com/questions.json",
        {
          method: "PUT",
          body: JSON.stringify(questions),
        }
      );
      if (!response.ok) {
        throw new Error("Sending questions data failed.");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent questions data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending questions data failed!",
        })
      );
    }
  };
};
