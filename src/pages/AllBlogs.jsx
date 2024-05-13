import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const AllBlogs = () => {
  const { data: blogs, isPending } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/blog/`);
      return res.json();
    },
  });

  console.log(blogs);
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
      <div>
        <div className="bg-[#F3F6F3] md:p-5 p-2 mt-5 mb-5 rounded-2xl">
          <h1 className="text-3xl font-bold text-center underline  text-[#14261C] "></h1>
        </div>
        <div>
          {blogs?.map((blog) => (
            <div key={blog._id} className="md:w-4/6 p-2 mx-auto">
              <div className="w-full ">
                <Card className="py-4 z-[-100] bg-[#00AC97] mb-3 p-4 rounded-lg text-white shadow-lg">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">
                      {blog?.title}
                    </p>
                    <small className="text-default-500">{blog?.short}</small>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <div className="overflow-hidden">
                      <img
                        alt="Card background"
                        className="object-cover rounded-xl cursor-pointer "
                        src={blog?.photo}
                        width={500}
                      />
                    </div>
                  </CardBody>
                </Card>
                <div className="flex justify-between ">
                  <Link to={`/blogdetails/${blog?._id}`}>
                    
                    <Button className="btn bg-red-300 rounded-lg text-white">Details</Button>
                  </Link>
                  <Link to={`/wishlist/${blog?._id}`}>
                    
                    <Button className="btn bg-[#00d2d3] rounded-lg text-white">Wishlist</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
