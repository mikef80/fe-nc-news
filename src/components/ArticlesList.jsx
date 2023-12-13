import { useEffect, useState } from "react";
import ArticleListItem from "./ArticleListItem";
import { getAllArticles } from "../api/api";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";
import SortBar from "./SortBar";

const ArticlesList = (props) => {
  const [articles, setArticles] = useState([]);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const topic = queryParams.get("topic");
  const sort_by = queryParams.get("sort_by");
  const order = queryParams.get("order");

  useEffect(() => {
    getAllArticles(topic, sort_by, order)
      .then(({ articles }) => {
        setErr(false);
        setArticles(articles);
        setLoading(false);
      })
      .catch((err) => {
        setErr(true);
        setLoading(false);
      });
  }, [sort_by, order, topic]);

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
    <>
      <SortBar topic={topic} />
      <ul className='px-3 pt-2'>
        {articles.map((article) => (
          <ArticleListItem key={article.article_id} article={article} />
        ))}
      </ul>
    </>
  );
};

export default ArticlesList;
