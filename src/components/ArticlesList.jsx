import { useEffect, useState } from "react";
import ArticleListItem from "./ArticleListItem";
import { getAllArticles } from "../api/api";
import Loading from "./Loading";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const ArticlesList = (props) => {
  const [articles, setArticles] = useState([]);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const topic = queryParams.get("topic");

  useEffect(() => {
    getAllArticles(topic)
      .then(({ articles }) => {
        setErr(false);
        setArticles(articles);
        setLoading(false);
      })
      .catch((err) => {
        setErr(true);
        setLoading(false);
      });
  }, [topic]);

  if (loading) {
    return <Loading />;
  }

  if (err) {
    return (
      <div className='text-red-600 font-bold text-xs flex justify-center pt-10'>
        An error occurred. Please navigate 'Home' and try again
      </div>
    );
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
