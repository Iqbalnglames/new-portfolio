import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation()
  const Page = location.pathname
  const unClicked = "p-4 text-[#9D93FF] hover:text-white hover:font-bold"
  const clicked = "p-4 hover:text-white font-bold text-white"

  return (
    <div className="flex justify-between px-10">
      <div>
        <Link to={"/"}>
          <h1 className="font-bold">Muhammad Iqbal</h1>
        </Link>
      </div>
      <div>
        <Link
          to={"/"}
          className={Page === "/" ? clicked : unClicked}
        >
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
    </div>
  );
};
export default Navbar;
