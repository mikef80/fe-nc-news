import React from "react";

const Error = ({ error }) => {
  const { status, msg } = error;
  return (
    <div className='p-5 border-red-600 border-4 flex flex-col items-center m-5'>
      <h2 className='text-2xl'>Error</h2>
      <p>
        {status} - {msg}
      </p>
    </div>
  );
};

export default Error;
