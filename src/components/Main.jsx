import React from "react";

const Main = ({ children }) => {
  return (
    <main className='relative top-[58px] md:max-w-2xl md:self-center'>
      {children}
    </main>
  );
};

export default Main;
