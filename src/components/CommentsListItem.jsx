import { useContext, useEffect, useState } from "react";
import DateDisplay from "./DateDisplay";
import { deleteCommentById, getAuthorByUsername } from "../api/api";
import Bin from "/img/bin.png";
import { UserContext } from "../contexts/UserContext";

const CommentsListItem = ({ comment, setComments, setShowErr,handleConfirmDeleted }) => {
  const { body, author, votes, created_at, comment_id } = comment;
  const [commentAuthor, setCommentAuthor] = useState({});
  const { user } = useContext(UserContext);
  const [displayDelete, setDisplayDelete] = useState(true);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    getAuthorByUsername(author)
      .then(({ user }) => setCommentAuthor(user))
      .then(() => {
        setDisplayDelete(() => {
          return user.username === author;
        });
      });
  }, []);

  const handleDeleteClick = () => {
    setDeleting(true);
    deleteCommentById(comment_id)
      .then(() => {
        setShowErr(false);
        setComments((currComments) => {
          return currComments.filter(
            (comment) => comment.comment_id !== comment_id
          );
        });
        handleConfirmDeleted(true)
      })
      .catch(() => setShowErr(true));
  };

  return (
    <li className='bg-slate-200 p-2 mb-2 rounded-lg'>
      <div className='flex-col flex items-center md:flex-row justify-between'>
        <div className='flex self-start'>
          <img
            src={commentAuthor.avatar_url}
            alt=''
            className='w-20 object-contain'
          />
          <div className='flex flex-col justify-between pl-5'>
            <p className='pb-4'>{body}</p>
            <div className='text-xs capitalize pt-2 text-gray-500 flex flex-col items-center'>
              <DateDisplay date={created_at} />
              <div className='flex justify-around pt-2 w-full'>
                <p>Author: {commentAuthor.name}</p>
                <p>Votes: {votes}</p>
              </div>
            </div>
          </div>
        </div>
        {displayDelete && (
          <button disabled={deleting} className='mt-3 md:w-8 md:mt-0 md:ml-2'>
            <img
              src={Bin}
              alt=''
              className='min-w-[32px] max-w-[32px] object-contain'
              onClick={handleDeleteClick}
              disabled
            />
          </button>
        )}
      </div>
    </li>
  );
};

export default CommentsListItem;
