import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const Page = location.pathname;
  const unClicked = "p-4 text-[#9D93FF] hover:text-white hover:font-bold";
  const clicked = "p-4 hover:text-white font-bold text-white";
  const [button, setButton] = useState();

  const isClicked = () => {
    setButton(!button);
  };

  return (
    <div className="flex justify-between lg:px-10">
      <div>
        <Link to={"/"}>
          <h1 className="hover:font-bold">Muhammad Iqbal</h1>
        </Link>
      </div>
      <div className="lg:block hidden">
        <Link to={"/"} className={Page === "/" ? clicked : unClicked}>
          Home
        </Link>
        <Link
          to={"/projects"}
          className={Page === "/projects" ? clicked : unClicked}
        >
          Projects
        </Link>
        <Link
          to={"/certificates"}
          className={Page === "/certificates" ? clicked : unClicked}
        >
          Certificates
        </Link>
        <Link
          to={"/profile"}
          className={Page === "/profile" ? clicked : unClicked}
        >
          Profile
        </Link>
        <Link
          to={"/contacts"}
          className={Page === "/contacts" ? clicked : unClicked}
        >
          Contacts
        </Link>
      </div>
      <button onClick={isClicked} className="block lg:hidden">
        <div className="w-[27px] h-[3px] m-2 my-1 bg-white"></div>
        <div className="w-[27px] h-[3px] m-2 my-1 bg-white"></div>
        <div className="w-[27px] h-[3px] m-2 my-1 bg-white"></div>
      </button>

      {button ? (
        <div className="fixed border-2 rounded-xl z-10 text-right bg-[#513EEC] border-white lg:hidden block shadow-xl top-24 right-16 left-16">
          <div className="">          
          <Link to={"/"} onClick={isClicked} className={Page === "/" ? clicked+" block" : unClicked+" block"}>
            Home
          </Link>
          <Link onClick={isClicked}
            to={"/projects"}
            className={Page === "/projects" ? clicked+" block" : unClicked+" block"}
          >
            Projects
          </Link>
          <Link onClick={isClicked}
            to={"/certificates"}
            className={Page === "/certificates" ? clicked+" block" : unClicked+" block"}
          >
            Certificates
          </Link>
          <Link onClick={isClicked}
            to={"/profile"}
            className={Page === "/profile" ? clicked+" block" : unClicked+" block"}
          >
            Profile
          </Link>
          <Link onClick={isClicked}
            to={"/contacts"}
            className={Page === "/contacts" ? clicked+" block" : unClicked+" block"}
          >
            Contacts
          </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Navbar;
