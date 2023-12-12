import { useEffect, useState } from "react";
import { getArticleById } from "../api/api";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import CommentsList from "./CommentsList";
import DateDisplay from "./DateDisplay";
import VotingBar from "./VotingBar";

const ArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticleById(article_id)
      .then(({ article }) => {
        setArticle(article);
      })
      .then(() => {
        setLoading(false);
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
    topic,
  } = article;

  if (loading) {
    return <Loading />;
  }

  return (
    <article className='flex flex-col'>
      <img src={article_img_url} alt='' className='md:pt-8' />
      <div className='px-4 flex flex-col'>
        <h2 className='text-2xl py-2 font-medium'>{title}</h2>
        <p className='text-xs pb-2'>By: {author}</p>
        <p className='leading-7'>{body}</p>
        <p className='text-xs capitalize pt-2 pb-[50px] text-gray-500'>
          {topic} • <DateDisplay date={created_at} />
        </p>
        <VotingBar votes={votes} article_id={article_id} />
        <CommentsList article_id={article_id} />
      </div>
    </article>
  );
};

export default ArticlePage;
