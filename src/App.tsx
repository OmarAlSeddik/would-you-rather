import Header from "./components/Header";
import Auth from "./components/Auth";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import AddQuestion from "./components/Questions/AskQuestion";
import PageNotFound from "./components/PageNotFound";
import AnswerQuestion from "./components/Questions/AnswerQuestion";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeContextProvider } from "./context/ThemeContext";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";

import { useEffect } from "react";
import { fetchUserbaseData, sendUserbaseData } from "./store/userbase";
import { fetchQuestionsData, sendQuestionsData } from "./store/questions";

let isInitialRender = true;

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const userbase = useSelector((state: RootState) => state.userbase);
  const questions = useSelector((state: RootState) => state.questions);

  useEffect(() => {
    if (isInitialRender) {
      isInitialRender = false;
      dispatch(fetchUserbaseData());
      dispatch(fetchQuestionsData());
    } else {
      dispatch(sendUserbaseData(userbase));
      dispatch(sendQuestionsData(questions));
    }
  }, [dispatch, userbase, questions]);

  return (
    <ThemeContextProvider>
      <BrowserRouter>
        {isLoggedIn && <Header />}
        <Routes>
          <Route
            path="/auth"
            element={!isLoggedIn ? <Auth /> : <Navigate to="/" />}
          />
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <Navigate to="/auth" />}
          />
          <Route
            path="/ask-a-question"
            element={isLoggedIn ? <AddQuestion /> : <Navigate to="/auth" />}
          />
          <Route
            path="/leaderboard"
            element={isLoggedIn ? <Leaderboard /> : <Navigate to="/auth" />}
          />
          <Route
            path=":id"
            element={isLoggedIn ? <AnswerQuestion /> : <Navigate to="/auth" />}
          />
          <Route
            path="*"
            element={isLoggedIn ? <PageNotFound /> : <Navigate to="/auth" />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  );
};

export default App;
