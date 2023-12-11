import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import ArticlesList from "./components/ArticlesList";
import Main from "./components/Main";
import ArticlePage from "./components/ArticlePage";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<ArticlesList />} />
          <Route path='/articles/:article_id' element={<ArticlePage />} />
        </Routes>
      </Main>
      <NavBar />
    </>
  );
}

export default App;
