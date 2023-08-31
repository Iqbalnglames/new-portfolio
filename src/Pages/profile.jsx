import { Link } from "react-router-dom";
import iqbal from '../assets/iqbal.png'

const Profile = () => {    
  return (
    <div className="mt-10 grid pb-48">
      <div className="mb-5 slide-right">
      <h1 className="text-2xl">I am Muhammad Iqbal Tsabitul Azmi</h1>
      </div>
    <div className="lg:flex lg:space-x-20 slide-right2">
      <div>
        <figure className="ml-8">
      <img src={iqbal} alt="" width={200} height={200} />
        </figure>
      </div>
      <div className="mt-1">
        <figcaption className="lg:flex hidden">
          <div className="lg:space-y-3 lg:mr-10 mr-1">
          <h1 className="font-bold">Name</h1>
          <h1 className="font-bold">Age</h1>
          <h1 className="font-bold">Email</h1>
          <h1 className="font-bold">Freelance</h1>          
          </div>
          <div className="space-y-3">
          <h1>: Muhammad Iqbal Tsabitul Azmi</h1>
          <h1>: 21</h1>
          <h1>: mi06514@gmail.com</h1>
          <h1>: Available</h1>
          </div>
        </figcaption>
          <div className="lg:hidden w-72 mt-6">
            <tr>
              <th className="text-left pl-5 pb-9">Name </th>
              <td>: Muhammad Iqbal Tsabitul Azmi</td>
            </tr>
            <tr>
              <th className="text-left pl-5 pb-4">Age </th>
              <td>: 21 Years Old</td>
            </tr>
            <tr>
              <th className="text-left pl-5 pb-4">Email </th>
              <td>: mi06514@gmail.com</td>
            </tr>
            <tr>
              <th className="text-left pl-5 pb-4">Freelance </th>
              <td>: Available</td>
            </tr>
          </div>
        <button className="p-2 lg:mx-4 lg:inline block my-2 bg-white active:bg-slate-300 text-black border border-b border-black rounded-md transition-button-white slide-top w-64">
        <Link target="_blank" className="p-2" to={'https://drive.google.com/file/d/17TGogHC9Z7bOph97NqGCu3dy4uQG8HDa/view?usp=drive_link'} >Show My CV</Link>
        </button>
      </div>
    </div>
    </div>
  )
};
export default Profile;
 