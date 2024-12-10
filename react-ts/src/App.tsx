import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ArticlesPage from "./pages/ArticlesPage";
import PostPage from "./pages/PostPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="articles" element={<ArticlesPage />} />
        <Route path="posts" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
