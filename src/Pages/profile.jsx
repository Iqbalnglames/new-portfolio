import iqbal from "../assets/iqbal.png";

const Profile = () => {
  return (
    <div className="slide-right text-center mb-10">
      <h1 className="text-xl font-bold">About Me</h1>
      <div className="mt-5 flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-10">
        <img src={iqbal} alt="muhammad iqbal" width={200} />
        <div className="flex flex-col">
          <div className="text-left flex space-x-1">
            <div className="space-y-7 font-bold">
              <p>Full Name</p>
              <p>Age</p>
              <p>Email</p>
              <p>Freelance</p>
            </div>
            <div className="space-y-7">
              <p>: Muhammad Iqbal Tsabitul Azmi</p>
              <p>: 23 Years Old</p>
              <p>: mi06514@gmail.com</p>
              <p>: Available</p>
            </div>
          </div>
          <div className="flex mt-7">
            <a
              target="_blank"
              className="p-3 w-64 bg-white active:bg-slate-300 text-black border border-b border-black rounded-md transition-button-white slide-top"
              href="https://drive.google.com/file/d/1N3SRrRVqb2SBInMemU0wIZbjVkZVNjWm/view?usp=sharing"
            >
              View My CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
