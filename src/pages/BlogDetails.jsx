import { Helmet } from "react-helmet-async";

const BlogDetails = () => {
  return (
    <div>
      <Helmet>
        <title>Simple Blog | Blog Details</title>
      </Helmet>
      <div className="bg-[#F3F6F3] md:p-5 p-2 mt-5 mb-5 rounded-2xl">
        <h1 className="text-3xl font-bold text-center underline  text-[#14261C] ">
          Blog Details
        </h1>
      </div>
    </div>
  );
};

export default BlogDetails;
