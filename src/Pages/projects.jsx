import QrScanner from '../assets/qr-scanner.png'
import Restaurants from '../assets/restaurants.png'
import Absen from '../assets/absen.png'
import { Link } from 'react-router-dom'
const Projects = () => {

    return (
        <div>
            <h1 className='slide-right text-center mb-7 font-bold text-xl -mt-3'>My Projects</h1>
            <div className="lg:flex lg:justify-around space-y-9 lg:space-y-0 lg:space-x-9">
                {/* first project */}
                <div className="rounded-sm p-3 w-[300px] card bg-white text-black border-2 border-black slide-right1">
                    <img className='border border-black' src={QrScanner} alt="qrscanner" width={400} />
                    <h1 className='font-bold text-xl'>QR Scanner</h1>
                    <h1 className='font-bold'>Teknologi yang digunakan :</h1>
                    <p>React JS</p>
                    <p>Tailwind CSS</p>
                    <Link to="https://codesandbox.io/s/qr-scanner-with-react-d1p16c" target='_blank'>
                        <button className='mt-8 p-2 lg:inline block my-2 bg-white active:bg-slate-300 text-black border border-b w-[270px] border-black rounded-md transition-button-white'>View Project</button>
                    </Link>
                </div>
                {/* second project */}
                <div className="rounded-sm p-3 w-[300px] card bg-white text-black border-2 border-black slide-right2">
                    <img className='border border-black' src={Restaurants} alt="qrscanner" width={400} />
                    <h1 className='font-bold text-xl'>Restaurants List With Filter</h1>
                    <h1 className='font-bold'>Teknologi yang digunakan :</h1>
                    <p>React JS</p>
                    <p>Tailwind CSS</p>
                    <Link to="https://technical-test-iqbalazmi.netlify.app/" target='_blank'>
                        <button className='mt-8 p-2 lg:inline block my-2 bg-white active:bg-slate-300 text-black border border-b w-[270px] border-black rounded-md transition-button-white'>View Project</button>
                    </Link>
                </div>
                {/* third project */}
                <div className="rounded-sm p-3 w-[300px] card bg-white text-black border-2 border-black slide-right3">
                    <img className='border border-black' src={Absen} alt="qrscanner" width={400} />
                    <h1 className='font-bold text-xl'>Absensi Guru/Asatidzah</h1>
                    <h1 className='font-bold'>Teknologi yang digunakan :</h1>
                    <p>React JS</p>
                    <p>Tailwind CSS</p>
                    <p>Laravel Framework</p>
                    <Link to="https://pastelink.net/k825dalr" target='_blank'>
                        <button className=' p-2 lg:inline block my-2 bg-white active:bg-slate-300 text-black border border-b w-[270px] border-black rounded-md transition-button-white'>View Repository</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Projects