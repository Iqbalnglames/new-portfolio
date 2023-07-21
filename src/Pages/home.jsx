import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [isClicked, setIsClicked] = useState('')
  const [isClicked1, setIsClicked1] = useState('')

  const handleMouseDown = () => {
    setIsClicked(true)
    setTimeout(() => {
      setIsClicked(false)
    }, 200)
  }
  const handleMouseDown1 = () => {
    setIsClicked1(true)
    setTimeout(() => {
      setIsClicked1(false)
    }, 200)
  }

  const ClickedStylebw = isClicked ? "p-3  lg:mx-4 lg:inline block my-2 bg-slate-300 text-black border border-b border-black rounded-xl" : "p-3 lg:mx-4 lg:inline block my-2 bg-white text-black border border-b-[5px] border-black rounded-xl slide-top"
  const ClikcedStyleclr = isClicked1 ? "p-3 lg:mx-4 lg:inline block my-2 border rounded-lg border-b bg-[#513EEC]" : "p-3 lg:mx-4 lg:inline block my-2 slide-top2 border rounded-lg border-b-[5px] bg-[#6451FF]"


  return (
    <>
      <div className="lg:flex">

        <div className="lg:mr-16 mx-2">
          <h1 className="text-7xl mb-5 slide-right hello">Hello.</h1>
          <div className="tongkat ml-1 slide-right2">
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

        <div className="mt-10 slide-right3">
          <h1 className="text-2xl mb-3 quicksand">Project</h1>
          <div className="tongkats pt-3 pl-3 w-64">
            <p>
              <Link
                to={"https://codesandbox.io/s/qr-scanner-with-react-d1p16c"} target="_blank"
                className="hover:font-bold"
              >
                Qr Scanner
              </Link>
            </p>
            <p>
              <Link
                className="hover:font-bold"
                to={'https://pslk.net/ul4krysx'}
              >sistem perawatan transportasi</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Link to={'profile'} onMouseDown={handleMouseDown} className={ClickedStylebw}>Profil Lengkapku</Link>
        <Link to={"contacts"} onMouseDown={handleMouseDown1} className={ClikcedStyleclr}>Contact Me</Link>
      </div>
    </>
  );
};
export default Home;
