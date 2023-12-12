import React from "react";

const Main = ({ children }) => {
  return (
    <main className='relative top-[58px] md:max-w-3xl md:self-center pb-[42px]'>
      {children}
    </main>
  );
};

export default Main;
