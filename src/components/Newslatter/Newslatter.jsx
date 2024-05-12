import { Input } from "@nextui-org/react";
import "./style.css";
import Swal from "sweetalert2";

const Newslatter = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const user={name:name,
        email:email};
        console.log(user);
       if (user.email||user.name) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Your work has been saved ${user.name} & ${user.email}`,
          showConfirmButton: false,
          timer: 1500
        });
       }
       else{
        <p>Please Provide valid data</p>
       }

    }
  return (
    <div>
       <div className="bg-[#F3F6F3] md:p-5 p-2 mt-5 mb-5 rounded-2xl">
            <h1 className="text-3xl font-bold text-center underline  text-[#14261C] ">Subscribe Our Newsletter</h1>
        </div>
      <div className="min-h-96">
        
        <div className="bg-scroll another min-h-96 rounded-lg">
          <div className="">
            <form onSubmit={handleSubmit} className="  ">
            <div className="flex md:flex-row flex-col gap-5 justify-center items-center p-5 min-h-96">
            <div className="bg-transparent md:w-1/3 w-full rounded-lg ">
              <label htmlFor="email">Email</label>
              <Input required type="email" name="email" placeholder="Enter Your Email" className="bg-teal-50 rounded-lg"/>
              </div>
              <div className="md:w-1/3 w-full rounded-lg ">
              <label htmlFor="name">Name</label>
              <Input required type="name" name="name" placeholder="Enter Your Name" className="rounded-lg bg-teal-50" />
              </div>
              <div className=" md:w-1/3 w-full rounded-lg ">
              <input
                type="submit"
                className="bg-[#30C7B5] md:w-1/3 w-full px-4 py-2 rounded-lg text-white cursor-pointer text-center "
              />
            </div>
            </div>
            
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newslatter;
