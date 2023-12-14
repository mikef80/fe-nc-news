import { Link } from "react-router-dom";
import NCNewsLogo from '../img/NCNewsLogo.png'

const Header = () => {
  return (
    <header className='text-center text-4xl  border-b-2 border-black fixed top-0 w-screen z-10 flex justify-center font-bold py-2 md:py-0 bg-[#efefef]'>
      <Link to='/'>
        <img src={NCNewsLogo} alt="" />
      </Link>
    </header>
  );
};

export default Header;
