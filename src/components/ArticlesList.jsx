import { useEffect, useState } from "react";
import ArticleListItem from "./ArticleListItem";
import { getAllArticles } from "../api/api";
import Loading from "./Loading";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then(({ articles }) => {
      setArticles(articles);
    });
  }, []);

  if (!articles.length) {
    return <Loading />;
  }

  return (
    <ul className='px-3 pt-2'>
      {articles.map((article) => (
        <ArticleListItem key={article.article_id} article={article} />
      ))}
    </ul>
  );
};

export default ArticlesList;
