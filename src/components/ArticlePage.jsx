import { useEffect, useState } from "react";
import { getArticleById } from "../api/api";
import { useParams } from "react-router-dom";

const ArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleById(article_id).then(({ article }) => {
      setArticle(article);
    });
  }, []);

  const {
    title,
    body,
    author,
    created_at,
    article_img_url,
    comment_count,
    votes,
  } = article;

  return (
    <article className='flex flex-col'>
      <img src={article_img_url} alt='' />
      <div className="px-2">
        <h2 className='text-2xl py-2'>{title}</h2>
        <p className='leading-7 pb-[42px]'>{body}</p>
      </div>
    </article>
  );
};

export default ArticlePage;
