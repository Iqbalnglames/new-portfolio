import { Link } from "react-router-dom";
import { useState } from "react";
import { MapPin } from "react-feather";
import { BookOpen } from "react-feather";
import { Hexagon } from "react-feather";

const Profile = () => {
    const [isClicked, setIsclicked] = useState();
    const [isClicked1, setIsclicked1] = useState();
    const [isClicked2, setIsclicked2] = useState();
  
    const handleMouseDown = () => {
      setIsclicked(true);
    };
    const handleMouseUp = () => {
      setIsclicked(false);
    };
    const handleMouseDown1 = () => {
      setIsclicked1(true);
    };
    const handleMouseUp1 = () => {
      setIsclicked1(false);
    };
    const handleMouseDown2 = () => {
      setIsclicked2(true);
    };
    const handleMouseUp2 = () => {
      setIsclicked2(false);
    };
  
    const buttonClicked = isClicked
      ? "p-2 block m-2 bg-transparent border rounded-lg"
      : "p-2 block m-1 bg-transparent border border-b-[5px] rounded-lg";
    const buttonClicked1 = isClicked1
      ? "p-2 block m-2 bg-transparent border rounded-lg"
      : "p-2 block m-1 bg-transparent border border-b-[5px] rounded-lg";
    const buttonClicked2 = isClicked2
      ? "p-2 block m-2 bg-transparent border rounded-lg"
      : "p-2 block m-1 bg-transparent border border-b-[5px] rounded-lg";
  return (
    <div className="flex">
      <figure className="">
        <img
          src="https://media.licdn.com/dms/image/C4D03AQHdhL1FnQ-8rg/profile-displayphoto-shrink_400_400/0/1657110066127?e=1692230400&v=beta&t=TH6lApRgYw9aES6TrtWwhdBIUQb9yQvXeIjqaQj42PQ"
          alt="my profile"
        />
      </figure>
      <div className="mt-5 ml-4">
            <Link
              to={""}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              className={buttonClicked}>
              <MapPin className="inline mr-2" />
              Detail Kelahiran
            </Link>
            <Link
              to={""}              
              onMouseDown={handleMouseDown1}
              onMouseUp={handleMouseUp1}
              className={buttonClicked1}>
              <BookOpen className="inline mr-2" /> Riwayat Pendidikan
            </Link>
            <Link
              to={""}              
              onMouseDown={handleMouseDown2}
              onMouseUp={handleMouseUp2}
              className={buttonClicked2}>
              <Hexagon className="inline mr-2" />
              Skill yang dikuasai
            </Link>
          </div>
    </div>
  );
};
export default Profile;
