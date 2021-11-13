import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContextProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import AddQuestion from "./components/AddQuestion";

import { useSelector } from "react-redux";
import { RootState } from "./store";

const App = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.authentication.isAuthenticated
  );

  console.log(isAuthenticated);

  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-a-question" element={<AddQuestion />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  );
};

export default App;
