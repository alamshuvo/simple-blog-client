import { Input } from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoEyeOffSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa6";


const Signup = () => {
    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
    return (
        <div className="bg-[#F3F6F3] ">
      <h1 className="md:text-3xl text-2xl  text-center font-bold text-[#00AC97]">
        {" "}
        SignUp
      </h1>
      <div className="w-full min-h-screen  flex justify-center md:flex-row flex-col ">
        <div className="md:w-1/2 ">
        <div className="w-full">
        <iframe src="https://lottie.host/embed/68f6700a-9828-46c0-b6ab-16f566a0f36d/xgQyMror0E.json" className="w-full min-h-screen"></iframe> 
        </div>
        </div>
        <div className="md:w-1/2 p-3">
          <form className="bg-white opacity-4 p-5 rounded-lg shadow-lime-100 mt-5">
          <div className="w-full p-5">
              <label htmlFor="name">Name</label>
              <Input type="text" name="name" placeholder="Enter Your Name" />
            </div>
          <div className="w-full p-5">
              <label htmlFor="name">Photo Url</label>
              <Input type="text" name="photo" placeholder="Photo Url" />
            </div>
            <div className="w-full p-5">
              <label htmlFor="email">Email</label>
              <Input type="email" name="email" placeholder="Enter Your Email" />
            </div>
            <div className="w-full p-5">
              <label htmlFor="">Password</label>
              <Input
                name="password"
                variant="bordered"
                placeholder="Enter your password"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <FaEye className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <IoEyeOffSharp className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
              />
            </div>
            <div className="w-full ">
              <input
                type="submit"
                className="bg-[#30C7B5] px-4 py-2 rounded-lg text-white cursor-pointer "
              />
            </div>
          </form>
         
          <p>
            Already Have An Account ?{" "}
            <Link className="text-[#00AC97]" to={"/login"}>
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
    );
};

export default Signup;