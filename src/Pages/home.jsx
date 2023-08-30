import { Link } from "react-router-dom";

const Home = () => {

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
              frontend maupun backend.
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
            {/* <p>
              <Link
                className="hover:font-bold"
                to={'https://pslk.net/ul4krysx'}
              >sistem perawatan transportasi</Link>
            </p> */}
            <p>
              <Link
                className="hover:font-bold"
                to={'https://technical-test-iqbalazmi.netlify.app/'}
                target="_blank"
              >Restaurant List with Filter</Link>
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
