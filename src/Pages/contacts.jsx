import { Link } from "react-router-dom";
import { GitHub, Email, LinkedIn } from "@mui/icons-material";

const Contacts = () => {
  return (
    <div className="h-[95.5vh]">
      <div className="lg:flex slide-top-profile text-center">
        <div className="ml-4">
          <h1 className="text-2xl font-bold slide-top-profile">My Social Media</h1>
          <div className="mt-4">
          <Link target="_blank" to={"https://www.linkedin.com/in/muhammad-iqbal-2544981aa/"} className="transition-button block p-3 w-44 my-3 font-bold border border-white rounded-md">
           <LinkedIn/> Linkedin
          </Link>
          <Link target="_blank" to={"https://github.com/Iqbalnglames"} className="transition-button block p-3 w-44 my-3 font-bold border border-white rounded-md">
           <GitHub/> Github
          </Link>
          <Link target="_blank" to={"mailto:mi06514@gmail.com"} className="transition-button block p-3 w-44 my-3 font-bold border border-white rounded-md">
           <Email/> Gmail
          </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default Contacts;
