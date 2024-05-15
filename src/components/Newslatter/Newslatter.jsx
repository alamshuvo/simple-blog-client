import { Input } from "@nextui-org/react";
import "./style.css";
import Swal from "sweetalert2";

const Newslatter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const user = {
      email: email,
    };
    // console.log(user);
    if (user.email) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: `Your work has been saved  ${user.email}`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      <p>Please Provide valid data</p>;
    }
  };
  return (
    <div className="mt-10">
      <div className=" md:p-5 p-2 mt-5 mb-5 rounded-2xl">
        <h1 className="text-2xl md:text-4xl font-bold underline  text-[#14261C] ">
          Subscribe Our Newsletter
        </h1>
        <p
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="mt-2"
        >
          Stay connected and never miss an update! Subscribe to our newsletter
          to receive the latest news, exclusive content, and special offers
          directly in your inbox. By joining our mailing list, you'll be the
          first to know about our newest blog posts, industry insights, upcoming
          events, and much more. Our newsletters are designed to keep you
          informed and engaged with valuable content tailored just for you. Sign
          up today and become part of our growing community!
        </p>
      </div>
      <div className=" flex md:flex-row flex-col-reverse justify-between w-full">
        <div className=" another min-h-96 rounded-lg  md:w-1/2 w-full">
          <div className="">
            <form onSubmit={handleSubmit} className="  ">
              <div className="flex md:flex-row flex-col gap-5 justify-center items-center p-3 min-h-96">
                <div className="bg-transparent  w-full rounded-lg ">
                 
                  <Input
                    required
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="bg-teal-50 rounded-lg"
                  />
                </div>

                <div className="  w-full rounded-lg ">
                  <input
                    type="submit"
                    className="bg-[#30C7B5]  w-full px-4 py-2 rounded-lg text-white cursor-pointer text-center "
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="ms:w-1/2 w-full">
          <div className="w-full h-full ">
            <section className="py-6 w-full h-full ">
              <div className="container flex flex-col justify-center p-4 mx-auto">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                  <img
                    className="object-cover w-full bg-gray-500 aspect-square"
                    src="https://i.ibb.co/3MVJ4Ks/mindfullness.jpg"
                  />
                  <img
                    className="object-cover w-full bg-gray-500 aspect-square"
                    src="https://source.unsplash.com/random/300x300/?2"
                  />
                  <img
                    className="object-cover w-full bg-gray-500 aspect-square"
                    src="https://source.unsplash.com/random/300x300/?3"
                  />
                  <img
                    className="object-cover w-full bg-gray-500 aspect-square"
                    src="https://source.unsplash.com/random/300x300/?4"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newslatter;
