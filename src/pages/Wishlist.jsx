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
 
  const { data: blogs, isPending,refetch } = useQuery({
    queryKey: ["blogs",user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/wishlist/wish/${user?.email}`
      );
     
      return res.json();
    },
  });
  console.log(blogs);
  
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
        fetch(`http://localhost:5000/wishlist/wish/${id}`, {
          method: "DELETE",
          
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              console.log(data);
              Swal.fire({
                title: "Deleted!",
                text: "Your wishlist Items has been deleted.",
                icon: "success",
              });
             refetch()
             
             
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
      <div className="bg-[#F3F6F3] md:p-5 p-2 mt-5 mb-5 rounded-2xl">
        <h1 className="text-3xl font-bold text-center underline  text-[#14261C] ">
          WishList
        </h1>
      </div>
      <div>
        {
          blogs?.map((blog) => (
          <div key={blog._id} className="md:w-5/6 p-2 mx-auto">
            <div className="w-full ">
              <Card className="py-4 z-[-100] bg-[#F3F6F3]  mb-3 p-4 rounded-lg text-[#00d2d3] shadow-lg">
              <div className="flex justify-between">
              <div>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Title: {blog?.title}</p>
                  <small className="text-default-500">Short description: {blog?.short}</small>
                </CardHeader>
              </div>
               <div>
               <CardBody className="overflow-visible py-2">
                  <div className="overflow-hidden ">
                  <p className="text-red-300">Categories:{blog?.categories}</p>
                    <img
                      alt="Card background"
                      className="object-cover rounded-xl cursor-pointer "
                      src={blog?.photo}
                      width={400}
                    />
                   
                  </div>
                </CardBody>
               </div>
              </div>
              </Card>


              {/* button */}
              <div className="flex justify-between bg-gray-200 p-2 rounded-lg">
              
                <Button onClick={() => handleDelete(blog?._id)} className="btn bg-[#00d2d3] rounded-lg text-white">
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
        ))
        
        }
      </div>
    </div>
  );
};

export default Wishlist;
