import { Link } from "react-router-dom";
import iqbal from '../assets/iqbal.png'

const Profile = () => {
  return (
    <div className="mt-10 h-screen grid pb-48">
      <h1 className="mb-5 slide-right text-center text-2xl">About Me</h1>
      <div className="lg:flex grid grid-col place-items-center slide-right2">
        <img src={iqbal} alt="my-profile-photo" width={200} className="lg:mr-5"/>                
          <figcaption>
            <div className="flex">            
            <div className=":lg:mr-5 font-bold flex flex-col space-y-9">
              <h1>Full Name</h1>
              <h1>Age</h1>
              <h1>Email</h1>
              <h1>Freelance</h1>
            </div>
            <div className="space-y-9 flex flex-col">
              <h1>: Muhammad Iqbal Tsabitul Azmi</h1>
              <h1>: 22 Years Old</h1>
              <h1>: mi06514@gmail.com</h1>
              <h1>: Available</h1>
            </div>
            </div>
      <button className="p-2 lg:inline block my-2 bg-white active:bg-slate-300 text-black border border-b border-black rounded-md transition-button-white slide-top w-64">
        <Link target="_blank" className="p-2" to={'https://drive.google.com/file/d/17TGogHC9Z7bOph97NqGCu3dy4uQG8HDa/view?usp=drive_link'} >Show My CV</Link>
        </button>        
          </figcaption>
      </div>
    </div>
  )
};
export default Profile;
