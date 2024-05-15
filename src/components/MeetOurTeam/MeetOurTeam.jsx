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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className=" ">
      <div className=" md:p-5 p-2 mt-5 mb-5 rounded-2xl">
        <h1 className="md:text-4xl text-2xl font-bold  underline  text-[#14261C] ">
          Meet Our Team
        </h1>
        <p   data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="mt-2">Get to know the passionate and dedicated individuals behind our success! Our team is composed of experts from various fields, each bringing their unique skills and perspectives to the table. We believe in the power of collaboration and innovation, and our team's diverse backgrounds help us tackle challenges and achieve remarkable results. In this section, you'll find detailed profiles of our team members, including their roles, experiences, and what drives them. Discover the faces and stories behind our organization and see how their commitment to excellence shapes everything we do. We're excited to share our journey with you and introduce you to the people who make it all possible!</p>
      </div>
      <div className="slider-container w-5/6  md:w-4/6 mx-auto md:min-h-screen  ">
        <Slider {...settings} className="h-full shadow-[#00AC97] shadow-xl">
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
