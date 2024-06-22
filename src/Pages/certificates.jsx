import html from '../assets/html.png'
import js from '../assets/js-dicoding.png'
import jss from '../assets/js-sololearn.png'
import { Link } from 'react-router-dom'
const Certificates = () => {
    const cert = [
        {
            cert_name: 'HTML Dasar',
            img: html,
            source: "Skillvul",
            link: ""
        },
        {
            cert_name: 'Javascript Intermediate',
            img: jss,
            source: "Sololearn",
            link: ""
        },
        {
            cert_name: 'Javascript Dasar',
            img: js,
            source: "Dicoding",
            link: "https://www.dicoding.com/certificates/72ZD821KLZYW"
        }
    ]
    return (
        <div className='slide-right text-center mb-7 font-bold text-xl -mt-3'>
            <h1 className='mb-4'>My Certificates</h1>
            <div className='lg:flex lg:justify-around space-y-9 lg:space-y-0 lg:space-x-9'>
                {cert.map((res, i) => {
                    return (
                        <div
                            key={i}
                            className="rounded-sm p-3 w-[300px] card bg-white text-black border-2 border-black slide-right1">
                            <img
                                className="border border-black"
                                src={res.img}
                                alt={res.cert_name}
                                width={400}
                            />
                            <h1 className="font-bold text-xl">{res.cert_name}</h1>
                            <h1 className="font-bold">Sumber Sertifikat :</h1>
                            <div className='grid grid-rows-1'>
                                <h1 className="font-bold text-xl">{res.source}</h1>
                            </div>
                            <Link to={res.link} target="_blank">
                                <button className=" p-2 lg:inline block my-2 bg-white active:bg-slate-300 text-black border border-b w-[270px] border-black rounded-md transition-button-white">
                                    Lihat Kredensial
                                </button>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Certificates