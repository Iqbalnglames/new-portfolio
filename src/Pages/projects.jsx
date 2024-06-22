import QrScanner from "../assets/qr-scanner.png";
import Restaurants from "../assets/restaurants.png";
import Absen from "../assets/absen.png";
import { Link } from "react-router-dom";
const Projects = () => {
    const projectArr = [
        {
            project_name: "QR SCanner",
            img: QrScanner,
            tech_stack: [
                {
                    tech_name: "React JS",
                },
                {
                    tech_name: "Tailwind CSS",
                },
            ],
            link: "https://codesandbox.io/s/qr-scanner-with-react-d1p16c",
            button: "View Project",
        },
        {
            project_name: "Restaurants List With Filter",
            img: Restaurants,
            tech_stack: [
                {
                    tech_name: "React JS",
                },
                {
                    tech_name: "Tailwind CSS",
                },
            ],
            link: "https://technical-test-iqbalazmi.netlify.app/",
            button: "View Project",
        },
        {
            project_name: "Absensi Guru/Asatidzah",
            img: Absen,
            tech_stack: [
                {
                    tech_name: "React JS",
                },
                {
                    tech_name: "Tailwind CSS",
                },
                {
                    tech_name: "Laravel PHP Framework",
                },
            ],
            link: "https://pastelink.net/k825dalr",
            button: "View Repository",
        },
    ];
    return (
        <div>
            <h1 className="slide-right text-center mb-7 font-bold text-xl -mt-3">
                My Projects
            </h1>
            <div className="lg:flex lg:justify-around space-y-9 lg:space-y-0 lg:space-x-9">
                {/* first project */}
                {projectArr.map((res, i) => {
                    return (
                        <div
                            key={i}
                            className="rounded-sm p-3 w-[300px] card bg-white text-black border-2 border-black slide-right1">
                            <img
                                className="border border-black"
                                src={res.img}
                                alt={res.project_name}
                                width={400}
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
