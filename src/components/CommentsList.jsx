import { useEffect, useState } from "react";
import CommentsListItem from "./CommentsListItem";
import { getCommentsByArticleId } from "../api/api";
import CommentForm from "./CommentForm";

const CommentsList = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, []);

  return (
    <>
      <CommentForm article_id={article_id} setComments={setComments} />
      <h3 className='text-xl'>Comments</h3>
      <ul>
        {comments.map((comment) => {
          return (
            <CommentsListItem key={comment.comment_id} comment={comment} />
          );
        })}
      </ul>
    </>
  );
};

export default CommentsList;
