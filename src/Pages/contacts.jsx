import { useState } from "react";
import { Link } from "react-router-dom";
import { GitHub, Email, LinkedIn } from "@mui/icons-material";

const Contacts = () => {
  const [isClicked, setIsclicked] = useState();
  const [isClicked1, setIsclicked1] = useState();
  const [isClicked2, setIsclicked2] = useState();

  const handleMouseDown = () => {
    setIsclicked(true);
    setTimeout(()=> {
      setIsclicked(false)
    },300)
  };
  
  const handleMouseDown1 = () => {
    setIsclicked1(true);
    setTimeout(()=> {
      setIsclicked1(false)
    },300)
  };
  const handleMouseDown2 = () => {
    setIsclicked2(true);
    setTimeout(()=> {
      setIsclicked2(false)
    },300)
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
      <div className="flex slide-top-profile">
        <figure>
          <img
            src="https://media.licdn.com/dms/image/C4D03AQHdhL1FnQ-8rg/profile-displayphoto-shrink_400_400/0/1657110066127?e=1692230400&v=beta&t=TH6lApRgYw9aES6TrtWwhdBIUQb9yQvXeIjqaQj42PQ"
            alt="my profile"
          />
        </figure>
        <div className="ml-4">
          <h1 className="text-2xl font-bold slide-top-profile">My Contacts</h1>

          <div className="mt-5 slide-top-profile2 w-48">
            <Link
              to={"https://github.com/Iqbalnglames"}
              target="_blank"
              onMouseDown={handleMouseDown}
             
              className={buttonClicked}>
              <GitHub className="mr-1"/>
              Github
            </Link>
            <Link
              to={"mailto:mi06514@gmail.com"}              
              onMouseDown={handleMouseDown1}
         
              className={buttonClicked1}>
              <Email className="mr-1"/> Gmail
            </Link>
            <Link
              to={"https://www.linkedin.com/in/muhammad-iqbal-2544981aa/"}
              target="_blank"
              onMouseDown={handleMouseDown2}
        
              className={buttonClicked2}>
              <LinkedIn className="mr-1"/>
              Linkedin
            </Link>
          </div>
        </div>
      </div>
      <figcaption className="mr-48 slide-right3">
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
