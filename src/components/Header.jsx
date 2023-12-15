import { Link } from "react-router-dom";
import NCNewsLogo from "/img/NCNewsLogo.png";
import toast, { Toaster } from "react-hot-toast";

const Header = () => {
  const toasterOptions = {
    className: "text-xl h-[70px] md:h-[61px] w-full border-2 border-black",
    success: {
      style: {
        background: "rgb(187,247,208)",
      },
    },
    error: {
      duration: Infinity,
      style: {
        background: "rgb(254,202,202)",
      },
    },
  };

  return (
    <header className='text-center text-4xl  border-b-2 border-black fixed top-0 w-screen z-10 flex justify-center font-bold py-2 md:py-0 bg-[#efefef]'>
      <a
        id='skip-to-content-link'
        className='text-2xl bg-white border-2 border-black  w-full h-full md:w-[446px] md:h-[63px] flex justify-center items-center rounded-xl p-2 absolute -translate-y-[250%] duration-300 focus:translate-y-0'
        href='#navbar'>
        Skip to Navigation
      </a>
      <Toaster
        gutter={0}
        toastOptions={toasterOptions}
        containerClassName='!top-0'
      />
      <h1>
        <Link to='/'>
          <img
            src={NCNewsLogo}
            alt='NCNews Logo. NC is written in purple with a light background, whilst News is the opposite of this.'
          />
        </Link>
      </h1>
    </header>
  );
};

export default Header;
