import { useEffect, useState } from "react";
import CommentsListItem from "./CommentsListItem";
import { getCommentsByArticleId } from "../api/api";
import CommentForm from "./CommentForm";
import toast from "react-hot-toast";

const CommentsList = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [showErr, setShowErr] = useState(false);
  const [confirmDeleted, setConfirmDeleted] = useState(false);

  useEffect(() => {
    getCommentsByArticleId(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, []);

  const handleConfirmDeleted = (deleted) => {
    toast.success("Comment deleted");
    setConfirmDeleted(deleted);
    setTimeout(() => {
      setConfirmDeleted(false);
    }, 3000);
  };

  return (
    <>
      <CommentForm article_id={article_id} setComments={setComments} />
      <h3 className='text-xl'>Comments</h3>
      <ul>
        {comments.map((comment) => {
          return (
            <CommentsListItem
              key={comment.comment_id}
              comment={comment}
              setComments={setComments}
              setShowErr={setShowErr}
              handleConfirmDeleted={handleConfirmDeleted}
            />
          );
        })}
      </ul>
    </>
  );
};

export default CommentsList;
