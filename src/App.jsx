import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import ArticlesList from "./components/ArticlesList";
import Main from "./components/Main";
import ArticlePage from "./components/ArticlePage";
import TopicsList from "./components/TopicsList";
import Error from "./components/Error";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<ArticlesList />} />
          <Route path='/articles/:article_id' element={<ArticlePage />} />
          <Route path='/topics' element={<TopicsList />} />
          <Route path='/articles' element={<ArticlesList />} />
          <Route
            path='/*'
            element={
              <Error error={{ status: 404, msg: "That page doesn't exist" }} />
            }
          />
        </Routes>
      </Main>
      <NavBar />
    </>
  );
}

export default App;
