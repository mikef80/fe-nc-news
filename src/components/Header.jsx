import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='text-center text-4xl py-2 border-b-2 border-black fixed top-0 w-screen bg-white z-10 flex justify-center font-bold'>
      <Link to='/'>
        <h1>NC News</h1>
      </Link>
    </header>
  );
};

export default Header;
