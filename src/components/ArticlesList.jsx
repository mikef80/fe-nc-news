import { useEffect, useState } from "react";
import ArticleListItem from "./ArticleListItem";
import { getAllArticles } from "../api/api";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";
import SortBar from "./SortBar";
import Error from "./Error";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const topic = queryParams.get("topic");
  const sort_by = queryParams.get("sort_by");
  const order = queryParams.get("order");

  useEffect(() => {
    getAllArticles(topic, sort_by, order)
      .then(({ articles }) => {
        setIsError(false);
        setArticles(articles);
        setLoading(false);
      })
      .catch((err) => {
        const {
          status,
          data: { msg },
        } = err.response;
        setIsError(true);
        setLoading(false);
        setError({ status, msg });
      });
  }, [sort_by, order, topic]);

  if (loading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <Error error={error} />
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
