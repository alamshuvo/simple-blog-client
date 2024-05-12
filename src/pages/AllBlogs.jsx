import { Helmet } from "react-helmet-async";

const AllBlogs = () => {
  return (
    <div>
      <Helmet>
        <title>Simple Blog | All Blogs</title>
      </Helmet>
      <div className="bg-[#F3F6F3] md:p-5 p-2 mt-5 mb-5 rounded-2xl">
        <h1 className="text-3xl font-bold text-center underline  text-[#14261C] ">
          All Blogs
        </h1>
      </div>
      This is all blogs
    </div>
  );
};

export default AllBlogs;
