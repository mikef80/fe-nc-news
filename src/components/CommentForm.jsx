import { useState } from "react";

const CommentForm = () => {
  const [comment, setComment] = useState("");

  const handleCommentUpdate = (e) => {
    setComment(e.target.value)
  }

  return (
    <form action='' className='flex justify-center p-3'>
      <label htmlFor='comment'>
        Comment:
        <input
          type='text'
          name='comment'
          id='comment'
          placeholder='Enter comment here...'
          className='pl-3 py-1 ml-3 border-2 rounded-md'
          value={comment}
          onChange={handleCommentUpdate}
        />
      </label>
      <button className='rounded-xl border-2 px-3 py-1 ml-3'>Submit</button>
    </form>
  );
};

export default CommentForm;
