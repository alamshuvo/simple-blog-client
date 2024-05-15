import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Button } from "@nextui-org/react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const RecentBlogs = () => {
  const { user, error } = useContext(AuthContext);

  const { data: blogs = [], isPending } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await fetch("https://simple-blog-server-two.vercel.app/blog");
      return res.json();
    },
  });
  console.log(blogs);

  //  console.log(bdata,adata);
  // if (!user) {
  //      return
  // }
  const handleWishlist2 = (e) => {
    if (e === "a") {
      Swal.fire({
        icon: "error",
        title: "Please loogdin",
        text: "please loogdin and Blog added wishlist  sucessfully!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };
  const handleWishlist = (c, d, e, f, g, h, i) => {
    const email = user?.email;
    const name = user?.displayName;
    const id = {
      email: email,
      name: name,
      date: c,
      categories: d,
      long: e,
      short: f,
      title: g,
      photo: h,
      unique: i,
    };

    axios
      .post("https://simple-blog-server-two.vercel.app/wishlist", id)
      .then((res) => {
        // console.log(res.data);
        if (!error) {
          Swal.fire({
            icon: "success",
            title: "WOW",
            text: "Blog added wishlist  sucessfully!",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        }
      })
      .catch((error) => {
        // console.log(error);
      });

    // console.log(id);
  };

  if (isPending) {
    return (
      <SkeletonTheme baseColor="#7B9FC4" highlightColor="#444">
        <div className="grid md:grid-cols-3 grid-cols-1 md:w-2/4 mx-auto items-center min-h-screen gap-5">
          <div>
            <p>
              <Skeleton count={5} />
            </p>
          </div>
          <div>
            <p>
              <Skeleton count={5} />
            </p>
          </div>
          <div>
            <p>
              <Skeleton count={5} />
            </p>
          </div>
        </div>
      </SkeletonTheme>
    );
  }
  return (
    <div className="z-0">
      <div className=" md:p-5 p-2 mt-5 mb-5 rounded-2xl">
        <h1 className="md:text-4xl text-2xl font-bold  underline  text-[#14261C] ">
          Our Recent Blogs
        </h1>
        <p
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="mt-2"
        >
          Welcome to our Recent Blog section, where we showcase the latest
          updates and articles. Stay informed with our most recent posts
          covering a wide range of topics. Whether you're looking for the latest
          industry news, insightful opinions, or practical tips and guides,
          you'll find it all here. Our recent blogs are curated to keep you
          updated and engaged with fresh and relevant content. Dive into our
          newest entries and explore what's trending now!
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-7   min-h-screen ">
        {blogs.length > 0 &&
          blogs?.slice(0, 6).map((blog) => (
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              key={blog._id}
              className=" rounded-lg w-full "
            >
              <div className="  rounded-md  h-full shadow-[#00AC97] shadow-xl  text-[#00AC97] md:p-4 ">
                <div className="h-[100px] w-full">
                  <p className="mb-3 text-[#14261C] ">
                    Categories: {blog?.categories}
                  </p>
                  <div className="">
                    <p>{blog?.formattedDate}</p>
                  </div>
                </div>
                <div className="w-full rounded-lg overflow-hidden p-3">
                  <div className="overflow-hidden">
                    <img
                      src={blog.photo}
                      alt=""
                      className="w-full hover:scale-110 hover:rotate-6 duration-500  rounded-lg h-[200px] cursor-pointer"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-between  p-6 space-y-8 ">
                  <div className="space-y-2 h-[150px] ">
                    <h2 className="text-xl text-[#14261C] font-semibold ">
                      {blog?.title}
                    </h2>

                    <p className=" text-[#14261C]">
                      {blog?.short.slice(0, 60)}
                    </p>
                  </div>
                  <div className="flex justify-center    gap-2 w-4/4">
                    <Link
                      to={`/blogdetails/${blog?._id}`}
                      className="flex items-center justify-center  font-semibold   rounded-md bg-[#00d2d3] text-white w-2/4"
                    >
                      <Button type="button">View Details</Button>
                    </Link>

                    {user ? (
                      <Button
                        onClick={() =>
                          handleWishlist(
                            blog?.formattedDate,
                            blog?.categories,
                            blog?.long,
                            blog?.short,
                            blog?.title,
                            blog?.photo,
                            blog?._id
                          )
                        }
                        type="button"
                        className="flex items-center justify-center  font-semibold   rounded-md bg-[#00d2d3] text-white w-2/4"
                      >
                        Wishlist
                      </Button>
                    ) : (
                      <Button
                        onClick={() => handleWishlist2("a")}
                        type="button"
                        className="flex items-center justify-center  w-2/4 font-semibold  rounded-md bg-[#00d2d3] text-white"
                      >
                        wishlist
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
