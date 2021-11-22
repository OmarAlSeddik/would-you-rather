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
            path="/add"
            element={isLoggedIn ? <AddQuestion /> : <Navigate to="/auth" />}
          />
          <Route
            path="/leaderboard"
            element={isLoggedIn ? <Leaderboard /> : <Navigate to="/auth" />}
          />
          <Route
            path="/questions/:question_id"
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
