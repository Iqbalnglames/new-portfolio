import { Link } from "react-router-dom";
import { projectArr } from "../Utilities/projects";
const Home = () => {
const link1 = Math.floor(Math.random() * projectArr.length)
const link2 = Math.floor(Math.random() * projectArr.length)
  return (
    <>
      <div className="lg:flex">
        <div className="lg:mr-16 mx-2">
          <h1 className="text-7xl mb-5 slide-right hello">Hello.</h1>
          <div className="tongkat ml-1 slide-right2 text-xl">
            <p className=" pl-6 -ml-2">
              Namaku Muhammad Iqbal Tsabitul Azmi, Aku adalah junior Fullstack
              developer,
            </p>
            <p className=" pl-6 -ml-2">
              saat ini berdomisili di Klaten, Jawa Tengah Indonesia.
            </p>
            <p className=" pl-6 -ml-2">
              Saat ini aku telah membuat satu project developing mulai dari
              frontend maupun backend.
            </p>
          </div>
        </div>

        <div className="mt-10 slide-right3">
          <h1 className="text-3xl mb-3">Project</h1>
          <div className="tongkats text-xl pt-1 pl-3 w-64">
            <p>
              <Link
                to={projectArr[link1].link} target="_blank"
                className="hover:font-bold"
              >
                {projectArr[link1].project_name}
              </Link>
            </p>
            <p>
              <Link
                to={projectArr[link2].link} target="_blank"
                className="hover:font-bold"
              >
                {projectArr[link2].project_name}
              </Link>
            </p>
            <p>
              <Link
                className="hover:font-bold"
                to={'projects'}
              >...More Project</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Link to={'profile'}  className="p-3 lg:mx-4 lg:inline block my-2 bg-white active:bg-slate-300 text-black border border-b border-black rounded-md transition-button-white slide-top">Profil Lengkapku</Link>
        <Link to={"contacts"} className="p-3 lg:mx-4 lg:inline block my-2 bg-[#6451FF] text-white active:bg-[#513EEC] border border-b border-white rounded-md transition-button slide-top2">Contact Me</Link>
      </div>
    </>
  );
};
export default Home;
