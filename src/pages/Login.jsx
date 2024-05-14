
import { useContext, useState } from "react";
// import { EyeFilledIcon } from "./EyeFilledIcon";
// import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { IoEyeOffSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaArrowRight } from "react-icons/fa";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import { Input } from "@nextui-org/react";
import Swal from "sweetalert2";

const Login = () => {
  const {loginUser,signinWithGoogle,error}=useContext(AuthContext)
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const navigate=useNavigate();
    const location=useLocation();
    const from =location?.state || "/"
 const handleLogin=(e)=>{
  e.preventDefault();
  const form=e.target;
  const email=form.email.value;
  const password=form.password.value;
  loginUser(email,password)
  .then(res=>{
    // console.log(res.user);
    if (!error) {
      Swal.fire({
          icon: "success",
          title: "WOW",
          text: "User created sucessfully!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
  }
  if (res.user) {
      navigate(from)
  }
  })
  .catch(error=>{
    if (error) {
      Swal.fire({
          icon: "error",
          title: "Opps",
          text: "Something went wrong you email or password is not correct!",
          footer: '<a href="#">Why do I have this issue?</a>'
        })}
    // console.log(error);
  
  })

 }
 const handleGoogleLogin=()=>{
  signinWithGoogle()
  .then(res=>{
    // console.log(res.user);
    if (!error) {
      Swal.fire({
          icon: "success",
          title: "WOW",
          text: "User created sucessfully!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
  }
  if (res.user) {
      navigate(from)
  }
  })
  .catch(error=>{
    // console.log(error);
  })
 }


  return (
    <div className="bg-[#F3F6F3] ">
      <h1 className="md:text-3xl text-2xl  text-center font-bold text-[#00AC97]">
        {" "}
        Login Now
      </h1>
      <div className="w-full min-h-screen  flex justify-center md:flex-row flex-col ">
        <div className="md:w-1/2 ">
        <iframe src="https://lottie.host/embed/43707db3-b2ba-41fc-a178-59f06c17598e/11YgZ3pIaN.json" className="w-full min-h-screen"></iframe>
        </div>
        <div className="md:w-1/2 p-3">
          <form onSubmit={handleLogin} className="bg-white opacity-4 p-5 rounded-lg shadow-lime-100 mt-5">
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
          <div>
            <p>Login With Another way</p>
            <div className="flex justify-start items-center">
            Google Login  <FaArrowRight />
              <button onClick={handleGoogleLogin}>
               
                <FcGoogle className="text-3xl" />
              </button>
            </div>
          </div>
          <p>
            New Here ?{" "}
            <Link className="text-[#00AC97]" to={"/registation"}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
