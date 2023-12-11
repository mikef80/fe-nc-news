import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='text-center border-t-2 border-black py-2 fixed bottom-0 w-screen bg-white'>
      <Link to='/'>Home</Link>
    </nav>
  )
}

export default NavBar