import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [ isClicked, setIsClicked ] = useState('')
  const [ isClicked1, setIsClicked1 ] = useState('')

  const handleMouseDown = () => {
    setIsClicked(true)
  }
  const handleMouseDown1 = () => {
    setIsClicked1(true)
  }

  const handleMouseUp = () => {
    setIsClicked(false)
  }

  const handleMouseUp1 = () => {
    setIsClicked1(false)
  }
  const ClickedStylebw = isClicked ? "p-3  mx-4 bg-slate-300 text-black border border-b border-black rounded-xl" : "p-3 mx-4 bg-white text-black border border-b-[5px] border-black rounded-xl"
  const ClikcedStyleclr = isClicked1 ? "p-3 mx-4 border rounded-lg border-b bg-[#513EEC]" : "p-3 mx-4  border rounded-lg border-b-[5px] bg-[#6451FF]"


  return (
    <>
      <div className="flex">

        <div className="mr-16">
          <h1 className="text-7xl mb-5 hello">Hello.</h1>
          <div className="tongkat ml-1">
            <p className=" pl-6 ml-2">
              Namaku Muhammad Iqbal Tsabitul Azmi, Aku adalah junior Fullstack
              developer,
            </p>
            <p className=" pl-6 ml-2">
              saat ini berdomisili di Klaten, Jawa Tengah Indonesia.
            </p>
            <p className=" pl-6 ml-2">
              Saat ini aku telah membuat satu project developing mulai dari
              frontend, backend, dan fullstack.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-2xl mb-3">Project</h1>
          <div className="tongkats pt-3 pl-3">
            <p>
              <Link
                to={"https://codesandbox.io/s/qr-scanner-with-react-d1p16c"} target="_blank">
                Qr absen
              </Link>
            </p>
            <p>
              <Link>sistem perawatan transportasi</Link>
            </p>
          </div>
        </div>
      </div>
        <div className="mt-10">
            <Link to={'profile'} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className={ClickedStylebw}>Profil Lengkapku</Link>
            <Link to={"/contacts"} onMouseDown={handleMouseDown1} onMouseUp={handleMouseUp1} className={ClikcedStyleclr}>Contact Me</Link>
        </div>
    </>
  );
};
export default Home;
