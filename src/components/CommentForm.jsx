import { useState } from "react";
import { postCommentByArticleId } from "../api/api";

const CommentForm = ({ article_id, setComments }) => {
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [err, setErr] = useState({
    display: false,
    msg: "An error occurred - your comment has not been submitted",
  });

  const handleCommentUpdate = (e) => {
    setComment(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErr((currErr) => {
      return { ...currErr, display: false };
    });
    if (comment.length) {
      setSubmitting(true);
      postCommentByArticleId(article_id, comment)
        .then(({ comment }) => {
          setComments((currComments) => [comment, ...currComments]);
        })
        .then(() => {
          setSubmitting(false);
        })
        .catch((err) => {
          setComments((currComments) => {
            currComments.shift();
            return currComments;
          });
        });
      setComment("");
    } else if (!comment.length) {
      setErr(() => {
        return {
          display: true,
          msg: "Please enter a comment in the field above",
        };
      });
    } else {
      setErr((currErr) => {
        return {
          ...currErr,
          display: true,
        };
      });
    }
  };

  return (
    <form
      className='flex flex-col items-center gap-3 justify-center p-3 mt-2'
      onSubmit={handleFormSubmit}>
      <label htmlFor='comment'>
        Comment:
        <input
          type='text'
          name='comment'
          id='comment'
          placeholder='Enter comment...'
          className='pl-3 py-1 ml-3 border-2 rounded-md'
          value={comment}
          onChange={handleCommentUpdate}
        />
      </label>
      {err.display && (
        <div className='text-red-600 font-bold text-xs'>{err.msg}</div>
      )}
      <button
        className='rounded-xl border-2 px-3 py-1 ml-3 bg-blue-200 hover:bg-blue-300 active:bg-blue-400 disabled:bg-gray-200 disabled:text-gray-400 w-28'
        disabled={submitting}>
        {submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default CommentForm;
