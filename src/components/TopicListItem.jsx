import { useEffect, useState } from "react";
import { getAllArticles } from "../api/api";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const TopicListItem = ({ topic }) => {
  const { slug } = topic;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles(slug).then(({ articles }) => setArticles(articles));
  }, []);

  if (!articles.length) {
    <Loading />;
  }

  if (articles.length) {
    return (
      <li>
        <Link to={`/articles?topic=${slug}`}>
          <div className='flex w-[204px] flex-wrap m-4 justify-center border-2 border-black rounded-xl relative'>
            <img
              src={articles[0].article_img_url}
              alt=''
              className='rounded-tl-xl w-[100px] aspect-square object-cover'
            />
            <img
              src={articles[1].article_img_url}
              alt=''
              className='rounded-tr-xl w-[100px] aspect-square object-cover'
            />
            <img
              src={articles[2].article_img_url}
              alt=''
              className='rounded-bl-xl w-[100px] aspect-square object-cover'
            />
            <img
              src={articles[3].article_img_url}
              alt=''
              className='rounded-br-xl w-[100px] aspect-square object-cover'
            />
            <div className='absolute top-1/2 -translate-y-1/2  text-3xl bg-white rounded-3xl p-2 border-2 border-black'>
              {slug}
            </div>
          </div>
        </Link>
      </li>
    );
  }
};

export default TopicListItem;
