import { Link } from "react-router-dom";
import DateDisplay from "./DateDisplay";

const ArticleListItem = ({ article }) => {
  const {
    article_id,
    article_img_url,
    author,
    title,
    body,
    topic,
    created_at,
  } = article;

  return (
    <li className='border-gray-400 border-2 p-2 mb-2'>
      <Link
        to={`/articles/${article_id}`}
        className='flex flex-col md:flex-row'>
        <img src={article_img_url} alt='' className='pb-2 md:w-1/2 md:pr-3' />
        <div>
          <h2 className='text-2xl pb-2'>{title}</h2>
          <p className='text-xs pb-2'>By: {author}</p>
          <p className='line-clamp-3'>{body}</p>
          <p className='text-xs capitalize pt-2'>
            {topic} •{" "}
            <DateDisplay date={created_at} />
          </p>
        </div>
      </Link>
    </li>
  );
};

export default ArticleListItem;
