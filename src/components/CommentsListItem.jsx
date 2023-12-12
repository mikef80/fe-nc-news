import { useEffect, useState } from "react";
import DateDisplay from "./DateDisplay";
import { getUserByUsername } from "../api/api";
import Bin from "../img/bin.png";

const CommentsListItem = ({ comment }) => {
  const { body, author, votes, created_at } = comment;
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserByUsername(author).then(({ user }) => setUser(user));
  }, []);

  return (
    <li className='bg-slate-200 p-2 mb-2 rounded-lg flex justify-between'>
      <img src={user.avatar_url} alt='' className='w-20 object-contain' />
      <div className='flex flex-col pl-5'>
        <p className='pb-4'>{body}</p>
        <div className='text-xs capitalize pt-2 text-gray-500'>
          <DateDisplay date={created_at} />
          <div className='flex justify-around pt-2'>
            <p>Author: {author}</p>
            <p>Votes: {votes}</p>
          </div>
        </div>
      </div>
      <img src={Bin} alt='' className='w-8 object-contain' />
    </li>
  );
};

export default CommentsListItem;
