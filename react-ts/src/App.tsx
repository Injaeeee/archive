import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ArticlesPage from "./pages/ArticlesPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="articles" element={<ArticlesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
