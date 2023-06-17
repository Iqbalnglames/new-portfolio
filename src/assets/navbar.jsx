import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <div className="flex justify-between px-10">
        <div>
            <h1 className="font-bold">Muhammad Iqbal</h1>
        </div>
        <div>
            <Link to={"/"} className="p-4 text-[#9D93FF] hover:text-white hover:font-bold focus:text-white">Home</Link>
            <Link to={"/"} className="p-4 text-[#9D93FF] hover:text-white hover:font-bold focus:text-white">Projects</Link>
            <Link to={"/"} className="p-4 text-[#9D93FF] hover:text-white hover:font-bold focus:text-white">Certificates</Link>
            <Link to={"/contacts"} className="p-4 text-[#9D93FF] hover:text-white hover:font-bold focus:text-white">Contacts</Link>
        </div>
        </div>
    )
}
export default Navbar