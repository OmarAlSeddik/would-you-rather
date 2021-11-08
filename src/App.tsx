import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { ThemeContextProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeContextProvider>
      <HashRouter>
        <Header />
        <Routes>
          <Route />
          <Route />
        </Routes>
      </HashRouter>
    </ThemeContextProvider>
  );
};

export default App;
