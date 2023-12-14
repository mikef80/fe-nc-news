import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='text-center border-t-2 border-black py-3 fixed bottom-0 w-screen flex justify-around bg-[#efefef] z-10'>
      <Link to='/'>Home</Link>
      <Link to='/topics'>Topics</Link>
    </nav>
  );
};

export default NavBar;
