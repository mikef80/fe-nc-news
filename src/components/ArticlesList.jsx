import { useEffect, useState } from "react";
import ArticleListItem from "./ArticleListItem";
import { getAllArticles } from "../api/api";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";

const ArticlesList = (props) => {
  const [articles, setArticles] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const topic = queryParams.get('topic');


  useEffect(() => {
    getAllArticles(topic).then(({ articles }) => {
      setArticles(articles);
    });
  }, [topic]);

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
