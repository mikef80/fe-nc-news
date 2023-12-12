import { useEffect, useState } from "react";
import DateDisplay from "./DateDisplay";
import { getUserByUsername } from "../api/api";

const CommentsListItem = ({ comment }) => {
  const { body, author, votes, created_at } = comment;
  const [user, setUser] = useState({});
  useEffect(() => {
    getUserByUsername(author).then(({ user }) => setUser(user));
  }, []);
  return (
    <li className='bg-slate-200 p-2 mb-2 rounded-lg flex'>
      <img src={user.avatar_url} alt="" className="w-20 object-contain aspect-square" />
      <div className='flex flex-col pl-5'>
        <p className="pb-4">{body}</p>
        <div className='text-xs capitalize pt-2 text-gray-500'>
          <DateDisplay date={created_at} />
          <div className='flex justify-around pt-2'>
            <p>Author: {author}</p>
            <p>Votes: {votes}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CommentsListItem;
