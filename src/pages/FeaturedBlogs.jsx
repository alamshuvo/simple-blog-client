import { Helmet } from "react-helmet-async";

const FeaturedBlogs = () => {
  return (
    <div>
      <Helmet>
        <title>Simple Blog | Featured Blog</title>
      </Helmet>
      <div className="bg-[#F3F6F3] md:p-5 p-2 mt-5 mb-5 rounded-2xl">
        <h1 className="text-3xl font-bold text-center underline  text-[#14261C] ">
          Featured Blog
        </h1>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
