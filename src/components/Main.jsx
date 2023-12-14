import React from "react";

const Main = ({ children }) => {
  return (
    <main className='relative top-[63px] md:max-w-3xl md:self-center pb-[50px] grow'>
      {children}
    </main>
  );
};

export default Main;
