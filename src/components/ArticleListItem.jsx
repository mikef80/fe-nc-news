import { Link } from "react-router-dom";

const ArticleListItem = ({ article }) => {
  const { article_img_url, title, body } = article;

  return (
    <li className='border-gray-300 border-2 p-2'>
      <Link to=''>
        <img src={article_img_url} alt='' className='pb-2' />
        <div>
          <h3 className='text-2xl pb-2'>{title}</h3>
          {/* <p className="">{body.length}</p> */}
          <p className='line-clamp-3'>{body}</p>
        </div>
      </Link>
    </li>
  );
};

export default ArticleListItem;
