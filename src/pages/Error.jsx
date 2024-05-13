import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className="flex items-center h-full p-16 bg-[#F3F6F3] text-gray-800 min-h-screen">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className=" text-center">
          {/* <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
            <span className="sr-only">Error</span>404
          </h2> */}
          <div className="w-full flex justify-center items-center">
          <iframe src="https://lottie.host/embed/ae5cf7c3-a328-43dd-a8ec-44864dbe0b65/Il1JfCsh2D.json"></iframe>
          </div>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we could not find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-600">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
         <Link to={"/"}>
         <Button className="px-8 py-3 font-semibold rounded 
         bg-[#30C7B5] text-gray-50 btn"
          >
            Back to homepage
          </Button>
         </Link>
        </div>
      </div>
     
    </section>
  );
};

export default Error;
