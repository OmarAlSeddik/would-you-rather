import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeContextProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Auth from "./components/Auth";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import AddQuestion from "./components/AddQuestion";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const App = () => {
  const isLoggedIn = useSelector<RootState>((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);

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
            path="add-a-question"
            element={isLoggedIn ? <AddQuestion /> : <Navigate to="/auth" />}
          />
          <Route
            path="leaderboard"
            element={isLoggedIn ? <Leaderboard /> : <Navigate to="/auth" />}
          />
          <Route
            path="*"
            element={isLoggedIn ? <Navigate to="/" /> : <Navigate to="/auth" />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  );
};

export default App;
