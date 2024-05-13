import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const RecentBlogs = () => {
  const { user,error } = useContext(AuthContext);

  const { data: blogs = [], isPending } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/blog");
      return res.json();
    },
  });
  console.log(blogs);

  //  console.log(bdata,adata);
  const handleWishlist = (c, d, e, f, g, h,i) => {
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
      unique:i
    };

    axios
      .post("http://localhost:5000/wishlist", id)
      .then((res) => {
        console.log(res.data);
        if (!error) {
          Swal.fire({
            icon: "success",
            title: "WOW",
            text: "Blog added wishlist  sucessfully!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(id);
  };

  if (isPending) {
    return <p>Loading............</p>;
  }

  return (
    <div className="z-0">
      <div className=" md:p-5 p-2 mt-5 mb-5 rounded-2xl">
        <h1 className="md:text-4xl text-2xl font-bold text-center underline  text-[#14261C] ">
          Our Recent Blogs
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 ">
        {blogs.length > 0 &&
          blogs?.slice(0, 6).map((blog) => (
            <div
              key={blog._id}
              className="p-5 rounded-lg shadow-lime-300 bg-[#F3F6F3]"
            >
              <div className="   rounded-md shadow-md  text-[#00AC97] ">
                <div className="  rounded-lg overflow-hidden ">
                  <p>Categories: {blog?.categories}</p>
                  <div className="overflow-hidden">
                    <img
                      src={blog.photo}
                      alt=""
                      className="w-full hover:scale-110 hover:rotate-6 duration-500  rounded-lg h-[300px] cursor-pointer"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-between h-full p-6 space-y-8 ">
                  <div className="space-y-2">
                    <h2 className="md:text-2xl text-xl text-[#14261C] font-semibold ">
                      {blog?.title}
                    </h2>
                    <p className=" text-[#00AC97]">
                      {blog?.short.slice(0, 100)}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Link to={`/blogdetails/${blog?._id}`}>
                      <button
                        type="button"
                        className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#00d2d3] text-white"
                      >
                        Details
                      </button>
                    </Link>

                    <button
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
                      className="flex items-center justify-between w-full p-3 font-semibold tracking-wide rounded-md bg-[#00d2d3] text-white"
                    >
                      Wishlist
                    </button>
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
