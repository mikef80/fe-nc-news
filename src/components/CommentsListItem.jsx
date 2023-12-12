import DateDisplay from "./DateDisplay";

const CommentsListItem = ({ comment }) => {
  const { body, author, votes, created_at } = comment;
  return (
    <li className='bg-slate-200 p-2 mb-2 rounded-lg'>
      <p>{body}</p>
      <div className='text-xs capitalize pt-2 text-gray-500'>
        <DateDisplay date={created_at} />
        <div className='flex justify-around pt-2'>
          <p>Author: {author}</p>
          <p>Votes: {votes}</p>
        </div>
      </div>
    </li>
  );
};

export default CommentsListItem;
