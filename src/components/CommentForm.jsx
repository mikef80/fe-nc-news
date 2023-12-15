import { useState } from "react";
import { postCommentByArticleId } from "../api/api";
import Error from "./Error";
import toast from "react-hot-toast";

const CommentForm = ({ article_id, setComments }) => {
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState();
  const [isError, setIsError] = useState(false);

  const handleCommentUpdate = (e) => {
    setComment(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsError(false);

    setSubmitting(true);
    postCommentByArticleId(article_id, comment)
      .then(({ comment }) => {
        setComments((currComments) => [comment, ...currComments]);
        setSubmitting(false);
        toast.success('Comment submitted!')
        setComment("");
      })

      .catch((err) => {
        console.log(err);
        setComments((currComments) => {
          currComments.shift();
          return currComments;
        });
        setIsError(true);
        setError({
          msg: err.message,
          status: 503,
        });
        setSubmitting(false);
      });
  };

  return (
    <form
      className={`flex flex-col items-center justify-center p-3 mt-2 `}
      onSubmit={handleFormSubmit}>
      <label
        htmlFor='comment'
        className={`flex items-center ${comment.length >= 50 ? "mb-7" : null}`}>
        Comment:
        <textarea
          name='comment'
          id='comment'
          placeholder='Enter comment...'
          className={`pl-3 py-1 ml-3 border-2 rounded-md `}
          value={comment}
          onChange={handleCommentUpdate}
        />
      </label>
      {comment.length < 50 ? (
        <p
          className={`mb-3 text-xs ${
            comment.length < 50 ? "text-red-600" : "text-black"
          }`}>
          chars remaining: {50 - comment.length}
        </p>
      ) : null}

      {isError ? <Error error={error} /> : null}

      <button
        className='rounded-xl border-2 px-3 py-1 ml-3 bg-blue-200 hover:bg-blue-300 active:bg-blue-400 disabled:bg-gray-200 disabled:text-gray-400 w-28'
        disabled={submitting || comment.length < 50}>
        {submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default CommentForm;
