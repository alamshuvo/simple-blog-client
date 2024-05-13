import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

import {Image} from "@nextui-org/react";

const MeetOurTeam = () => {
  const { user } = useContext(AuthContext);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className=" ">
      <div className=" md:p-5 p-2 mt-5 mb-5 rounded-2xl">
        <h1 className="md:text-4xl text-2xl font-bold text-center underline  text-[#14261C] ">
          Meet Our Team
        </h1>
      </div>
      <div className="slider-container w-4/6 mx-auto min-h-screen">
        <Slider {...settings} className="h-full ">
          <div className="">
            <Image
              isBlurred
              width={240}
              height={240}
              src="https://i.ibb.co/FHVFcrK/162638.jpg"
              alt="NextUI Album Cover"
              className="m-5 w-full h-[200px]"
            />
            <p className="text-2xl font-bold text-[#14261C]">Jwel</p>
          </div>
          <div className="">
            <Image
              isBlurred
              width={240}
              height={240}
              src="https://i.ibb.co/ZNWDY7g/19015.jpg"
              alt="NextUI Album Cover"
              className="m-5 w-full h-[200px]"
            />
            <p className="text-2xl font-bold text-[#14261C]">Armani</p>
          </div>
          <div className="">
            <Image
              isBlurred
              width={240}
              height={240}
              src="https://i.ibb.co/FHXkT3d/1267.jpg"
              alt="NextUI Album Cover"
              className="m-5 w-full h-[200px]"
            />
            <p className="text-2xl font-bold text-[#14261C]">Warner</p>
          </div>
          <div className="">
            <Image
              isBlurred
              width={240}
              height={240}
              src="https://i.ibb.co/NFRxnsp/5365.jpg"
              alt="NextUI Album Cover"
              className="m-5 w-full h-[200px]"
            />
            <p className="text-2xl font-bold text-[#14261C]">David</p>
          </div>
          <div className="">
            <Image
              isBlurred
              width={240}
              height={240}
              src="https://i.ibb.co/Bt4YwHH/2148763859.jpg"
              alt="NextUI Album Cover"
              className="m-5 w-full h-[200px]"
            />
            <p className="text-2xl font-bold text-[#14261C]"> Alam</p>
          </div>
          <div className="w-[300px]">
            <Image
              isBlurred
              width={240}
              height={240}
              src="https://i.ibb.co/DrGcNgS/2148612950.jpg"
              alt="NextUI Album Cover"
              className="m-5 w-full h-[200px]"
            />
            <p className="text-2xl font-bold text-[#14261C]">Ash Alam</p>
            
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MeetOurTeam;
