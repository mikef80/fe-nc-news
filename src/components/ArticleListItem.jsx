import { Link } from "react-router-dom";

const ArticleListItem = ({ article }) => {
  const { article_id, article_img_url, author, title, body } = article;

  return (
    <li className='border-gray-300 border-2 p-2'>
      <Link to={``} className="flex flex-col md:flex-row">
        <img src={article_img_url} alt='' className='pb-2 md:w-1/2 md:pr-3' />
        <div>
          <h3 className='text-2xl pb-2'>{title}</h3>
          <h4 className='text-xs pb-2'>By: {author}</h4>
          {/* <p className="">{body.length}</p> */}
          <p className='line-clamp-3'>{body}</p>
        </div>
      </Link>
    </li>
  );
};

export default ArticleListItem;
