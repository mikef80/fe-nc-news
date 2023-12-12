import { useState } from "react";
import { updateVotesByArticleId } from "../api/api";

const VotingBar = ({ votes, article_id }) => {
  const [articleVotes, setArticleVotes] = useState(votes);
  const [showErr, setShowErr] = useState(false);

  const handleVote = (vote_count) => {
    setArticleVotes((currVotes) => currVotes + vote_count);

    updateVotesByArticleId(article_id, vote_count).catch((err) => {
      setArticleVotes((currVotes) => {
        return currVotes - vote_count;
      });

      setShowErr(true);
      
      setTimeout(() => {
        setShowErr(false);
      }, 3000);
    });
  };

  return (
    <div className='flex items-center flex-col w-[100%] gap-3'>
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
      {showErr && (
        <div className='text-red-600 font-bold text-xs'>
          An error occured - your vote has not been recorded
        </div>
      )}
    </div>
  );
};

export default VotingBar;
