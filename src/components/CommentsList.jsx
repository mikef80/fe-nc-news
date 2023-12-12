import { useEffect, useState } from "react";
import CommentsListItem from "./CommentsListItem";
import { getCommentsByArticleId } from "../api/api";

const CommentsList = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, []);

  return (
    <>
      <h3 className="text-xl">Comments</h3>
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
