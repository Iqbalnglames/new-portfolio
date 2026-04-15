import { projectArr } from "../Utilities/projects";
import { Link } from "react-router-dom";
const Projects = () => {
    return (
        <div>
            <h1 className="slide-right text-center mb-7 font-bold text-xl -mt-3">
                My Projects
            </h1>
            <div className="lg:flex text-center flex-col items-center gap-2 absolute right-[370px] hidden top-[370px] slide-top2">
                <p>Scroll card<br />ke bawah</p>
                <span className="[writing-mode:vertical-rl] animate-bounce duration-500">{'>>>>>>>>'}</span>
            </div>
            <div className="lg:grid lg:grid-cols-3 lg:h-[400px] h-[600px] p-4 overflow-scroll lg:justify-around space-y-9 lg:space-y-0 lg:gap-9">
                {projectArr.map((res, i) => {
                    return (
                        <div
                            key={i}
                            className="rounded-sm p-3 w-[300px] card bg-white text-black border-2 border-black slide-right1">
                            <img
                                className="border border-black h-[150px]"
                                src={res.img}
                                alt={res.project_name}
                            />
                            <h1 className="font-bold text-xl">{res.project_name}</h1>
                            <h1 className="font-bold">Teknologi yang digunakan :</h1>
                            <div className='grid grid-rows-3'>
                                {res.tech_stack.map((tech, i) => (
                                    <p key={i}>{tech.tech_name}</p>
                                ))}
                            </div>
                            <Link to={res.link} target="_blank">
                                <button className=" p-2 lg:inline block my-2 bg-white active:bg-slate-300 text-black border border-b w-[270px] border-black rounded-md transition-button-white">
                                    {res.button}
                                </button>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default Projects;
