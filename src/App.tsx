// local component imports //
import Header from "./components/Header";
import Auth from "./components/Auth";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import AddQuestion from "./components/Questions/AskQuestion";
import AnswerQuestion from "./components/Questions/AnswerQuestion";
import PageNotFound from "./components/PageNotFound";
// hook imports //
import { useEffect } from "react";
// redux imports //
import { useDispatch, useSelector } from "react-redux";
import { fetchUserbaseData, sendUserbaseData } from "./store/userbase";
import { fetchQuestionsData, sendQuestionsData } from "./store/questions";
import { RootState } from "./store";
// context imports //
import { ThemeContextProvider } from "./context/ThemeContext";
// routing imports //
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

let isInitialRender = true;

const App = () => {
  const dispatch = useDispatch();
  const loggedInUserId = useSelector(
    (state: RootState) => state.auth.loggedInUserId
  );
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
        {loggedInUserId && <Header />}
        <Routes>
          <Route
            path="/auth"
            element={!loggedInUserId ? <Auth /> : <Navigate to="/" />}
          />
          <Route
            path="/"
            element={loggedInUserId ? <Home /> : <Navigate to="/auth" />}
          />
          <Route
            path="/add"
            element={loggedInUserId ? <AddQuestion /> : <Navigate to="/auth" />}
          />
          <Route
            path="/leaderboard"
            element={loggedInUserId ? <Leaderboard /> : <Navigate to="/auth" />}
          />
          <Route
            path="/questions/:question_id"
            element={
              loggedInUserId ? <AnswerQuestion /> : <Navigate to="/auth" />
            }
          />
          <Route
            path="*"
            element={
              loggedInUserId ? <PageNotFound /> : <Navigate to="/auth" />
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  );
};

export default App;
