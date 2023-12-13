import React from "react";

const Main = ({ children }) => {
  return (
    <main className='relative top-[52px] md:max-w-3xl md:self-center pb-[42px] grow'>
      {children}
    </main>
  );
};

export default Main;
