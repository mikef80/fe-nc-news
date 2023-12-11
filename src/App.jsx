import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import ArticlesList from "./components/ArticlesList";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<ArticlesList />} />
        </Routes>
      </Main>
      <NavBar />
    </>
  );
}

export default App;
