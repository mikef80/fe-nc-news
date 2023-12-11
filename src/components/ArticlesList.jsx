import { useEffect, useState } from "react";
import ArticleListItem from "./ArticleListItem";
import { getAllArticles } from "../api/api";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then(({ articles }) => {
      setArticles(articles);
    });
  },[]);

  return (
    <ul className="px-3">
      {articles.map(article => <ArticleListItem key={article.article_id} article={article}  />)}
    </ul>
  )
};

export default ArticlesList;
