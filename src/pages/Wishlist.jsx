import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import { Button } from "@nextui-org/react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { user } = useContext(AuthContext);

  const {
    data: blogs,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["blogs", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://simple-blog-server-two.vercel.app/wishlist/wish/${user?.email}`,
      );

      return res.json();
    },
  });
  // console.log(blogs);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://simple-blog-server-two.vercel.app/wishlist/wish/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              // console.log(data);
              Swal.fire({
                title: "Deleted!",
                text: "Your wishlist Items has been deleted.",
                icon: "success",
              });
              refetch();
            }
          });
      }
    });
  };

  if (isPending) {
    return <p>Loading..............</p>;
  }
  return (
    <div>
      <Helmet>
        <title>Simple Blog | Wishlist</title>
      </Helmet>
      <div className=" md:p-5 p-2 mt-5 mb-5 rounded-2xl">
        <h1 className="md:text-4xl text-3xl font-bold text-center underline  text-[#14261C] ">
          WishList
        </h1>
      </div>
      <div>
        {blogs?.map((blog) => (
          <div
            key={blog?._id}
            className="flex flex-col overflow-hidden  border lg:flex-row p-4 gap-5 rounded-lg shadow-[#00AC97] shadow-xl"
          >
            <img
              src={blog?.photo}
              alt=""
              className="h-80  aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50 space-y-7">
              {/* <span className="text-xs uppercase dark:text-gray-600">
                Join, it's free
              </span> */}
              
              <p className="text-tiny uppercase font-bold">
                {" "}
                Title: {blog?.title}
              </p>
              <small className="text-default-500">
                Short description : {blog?.short}
              </small>
              <div className="flex justify-between bg-gray-200 p-2 rounded-lg">
                <Button
                  onClick={() => handleDelete(blog?._id)}
                  className="btn bg-[#00d2d3] rounded-lg text-white"
                >
                  Delete
                </Button>
                <Link to={`/blogdetails/${blog?.unique}`}>
                  <Button className="btn bg-red-300 rounded-lg text-white">
                    Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
