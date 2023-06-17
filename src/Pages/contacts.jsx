import { useState } from "react";
import { Link } from "react-router-dom";
import { Linkedin } from "react-feather";
import { Mail } from "react-feather";
import { GitHub } from "react-feather";

const Contacts = () => {
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
    <div className="">
      <div className="flex">
        <figure>
          <img
            src="https://media.licdn.com/dms/image/C4D03AQHdhL1FnQ-8rg/profile-displayphoto-shrink_400_400/0/1657110066127?e=1692230400&v=beta&t=TH6lApRgYw9aES6TrtWwhdBIUQb9yQvXeIjqaQj42PQ"
            alt="my profile"
          />
        </figure>
        <div className="ml-4">
          <h1 className="text-2xl font-bold">My Contacts</h1>

          <div className="mt-5">
            <Link
              to={"https://github.com/Iqbalnglames"}
              target="_blank"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              className={buttonClicked}>
              <GitHub className="inline mr-2" />
              Github
            </Link>
            <Link
              to={"mailto:mi06514@gmail.com"}              
              onMouseDown={handleMouseDown1}
              onMouseUp={handleMouseUp1}
              className={buttonClicked1}>
              <Mail className="inline mr-2" /> Gmail
            </Link>
            <Link
              to={"https://www.linkedin.com/in/muhammad-iqbal-2544981aa/"}
              target="_blank"
              onMouseDown={handleMouseDown2}
              onMouseUp={handleMouseUp2}
              className={buttonClicked2}>
              <Linkedin className="inline mr-2" />
              Linkedin
            </Link>
          </div>
        </div>
      </div>
      <figcaption className="mr-48">
        <p>
          Kegigihan dan ambisi dalam bekerja selalu saya kedepankan, karena
          sebagai muslim Amanah adalah nomer satu dibawah ibadah, saya selalu
          memprioritaskan Amanah yang saya pikul, dan saya sangat amat senang
          dengan hal hal yang berhubungan dengan komputer dan programming serta
          suka dan berminat untuk berfikir inovasi terbaru
        </p>
      </figcaption>
    </div>
  );
};
export default Contacts;
