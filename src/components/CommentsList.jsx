import { useEffect, useState } from "react";
import CommentsListItem from "./CommentsListItem";
import { getCommentsByArticleId } from "../api/api";
import CommentForm from "./CommentForm";

const CommentsList = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [showErr, setShowErr] = useState(false);

  useEffect(() => {
    getCommentsByArticleId(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, []);

  return (
    <>
      <CommentForm article_id={article_id} setComments={setComments} />
      <h3 className='text-xl'>Comments</h3>
      {showErr && (
        <div className='text-red-600 font-bold text-xs flex justify-center pb-2'>
          An error occurred - comment was not deleted
        </div>
      )}
      <ul>
        {comments.map((comment) => {
          return (
            <CommentsListItem
              key={comment.comment_id}
              comment={comment}
              setComments={setComments}
              setShowErr={setShowErr}
            />
          );
        })}
      </ul>
    </>
  );
};

export default CommentsList;
