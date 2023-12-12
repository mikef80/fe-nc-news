import { useState } from "react";
import { updateVotesByArticleId } from "../api/api";

const VotingBar = ({ votes, article_id }) => {
  const [articleVotes, setArticleVotes] = useState(votes);

  const handleVote = (vote_count) => {
    setArticleVotes((currVotes) => currVotes + vote_count);

    updateVotesByArticleId(article_id, vote_count).catch((err) => {
      setArticleVotes((currVotes) => {
        return currVotes - vote_count;
      });
    });
  };

  return (
    <div className='flex justify-center w-[100%] gap-10'>
      <button
        onClick={() => handleVote(1)}
        className='bg-green-200 px-5 rounded-xl active:bg-green-400'>
        +1
      </button>
      <div>Votes: {articleVotes}</div>
      <button
        onClick={() => handleVote(-1)}
        className='bg-red-200 px-5 rounded-xl active:bg-red-400'>
        -1
      </button>
    </div>
  );
};

export default VotingBar;
