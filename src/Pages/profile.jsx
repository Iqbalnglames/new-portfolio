import { Link } from "react-router-dom";
import { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import CodeIcon from "@mui/icons-material/Code";

const Profile = () => {
  const [isClicked, setIsclicked] = useState();
  const [isClicked1, setIsclicked1] = useState();
  const [isClicked2, setIsclicked2] = useState();
  const [lahir, setLahir] = useState(false);
  const [pendidikan, setPendidikan] = useState(false);
  const [skill, setSkill] = useState(false);

  const handleMouseDown = () => {
    setIsclicked(true);
    setTimeout(() => {
      setIsclicked(false);
    }, 200);
  };
  const handleMouseDown1 = () => {
    setIsclicked1(true);
    setTimeout(() => {
      setIsclicked1(false);
    }, 300);
  };

  const handleMouseDown2 = () => {
    setIsclicked2(true);
    setTimeout(() => {
      setIsclicked2(false);
    }, 300);
  };
  const kelahiran = () => {
    setTimeout(()=>{
      setLahir(!lahir);
    },200)
    setPendidikan(false)
    setSkill(false)
  };
  const didik = () => {
    setTimeout(()=>{
      setPendidikan(!pendidikan)
    },200)
    setLahir(false)
    setSkill(false)
  }
  const ability = () => {
    setTimeout(()=>{
      setSkill(!skill)
    },200)
    setLahir(false)
    setPendidikan(false)
  }

  const buttonClicked = isClicked
    ? "p-2 block m-2 z-20 bg-[#4F3DFF] border rounded-lg"
    : "p-2 block m-1 z-20 bg-[#4F3DFF] border border-b-[5px] rounded-lg";
  const buttonClicked1 = isClicked1
    ? "p-2 block m-2 bg-[#4F3DFF] border rounded-lg"
    : "p-2 block m-1 bg-[#4F3DFF] border border-b-[5px] rounded-lg";
  const buttonClicked2 = isClicked2
    ? "p-2 block m-2 bg-[#4F3DFF] border rounded-lg"
    : "p-2 block m-1 bg-[#4F3DFF] border border-b-[5px] rounded-lg";

  return (
    <>
      <div>
        <h1 className="text-center mb-10 text-2xl font-bold">
          Profil Lengkapku
        </h1>
        <div className="flex">
          <figure className="">
            <img
              src="https://media.licdn.com/dms/image/C4D03AQHdhL1FnQ-8rg/profile-displayphoto-shrink_400_400/0/1657110066127?e=1692230400&v=beta&t=TH6lApRgYw9aES6TrtWwhdBIUQb9yQvXeIjqaQj42PQ"
              alt="my profile"
            />
          </figure>
          <div className="mt-5 ml-4 w-72">
            <Link
              to={""}
              onClick={kelahiran}
              onMouseDown={handleMouseDown}
              className={buttonClicked}
            >
              <LocationOnIcon className="inline mr-2" />
              Detail Kelahiran
            </Link>
            {lahir ? (
              <div id="upper" className="p-2 z-10 slide-bottom block m-1 mt-[-12px] border-[3px] rounded-b-lg border-t-0">
                <div className="py-2">
                  <h1 className="font-bold">Lahir Pada :</h1>
                  <h1>Madiun 5 Februari 2002</h1>
                </div>
              </div>
            ) : null}
            <Link
              to={""}
              onMouseDown={handleMouseDown1}
              className={buttonClicked1}
              onClick={didik}
            >
              <LocalLibraryIcon className="inline" /> Riwayat Pendidikan
            </Link>
            {pendidikan ? <div className="p-2 block m-1 mt-[-12px] border-[3px] rounded-b-lg slide-bottom border-t-0">
              <div className="py-2 ">
              <h1 className="font-bold">Junior High School :</h1>
              <h1>MTs Al Irsyad Tengaran</h1>
              <h1 className="font-bold">Senior High School :</h1>
              <h1>MA Al Irsyad Tengaran</h1>
              <h1 className="font-bold">First College :</h1>
              <h1>IDN Polythecnic Bogor</h1>
              <h1 className="font-bold">Second College :</h1>
              <h1>STMIK AMIKOM Surakarta</h1>
              </div>              
              </div> : null}
            <Link
              to={""}
              onMouseDown={handleMouseDown2}
              className={buttonClicked2}
              onClick={ability}
            >
              <CodeIcon className="inline mr-2" />
              Skill yang dikuasai
            </Link>
            {skill ? (
              <div className="p-2 z-10 px-4 slide-bottom block m-1 mt-[-12px] border-[3px] rounded-b-lg border-t-0">
                <div className="flex justify-between">
                <div className="py-2">
                  <h1 className="font-bold">FrontEnd</h1>
                  <h1 className="hover:font-bold">HTML 5</h1>
                  <h1 className="hover:font-bold">CSS 3</h1>
                  <h1 className="hover:font-bold">Tailwind</h1>
                  <h1 className="hover:font-bold">Javascript</h1>
                  <h1 className="hover:font-bold">React Js</h1>
                </div>
                <div className="py-2">
                  <h1 className="font-bold">BackEnd</h1>
                </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
