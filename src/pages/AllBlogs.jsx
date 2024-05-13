import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";

const AllBlogs = () => {
  const {user}=useContext(AuthContext)
  const { data: blogs, isPending } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/blog/`);
      return res.json();
    },
  });

  const handleWishlist = (c,d,e,f,g,h) => {
    const email=user?.email;
    const name=user?.displayName
    const id={email:email,name:name,date:c,categories:d,long:e,short:f,title:g,photo:h}
    axios.post('http://localhost:5000/wish',id)
    .then(res=>{console.log(res.data);})
    .catch(error=>{console.log(error);})
    console.log(id);
  };





  // const handleCreative=(text)=>{
  //   console.log(text);
  // }
  // const handleHelth=(text)=>{
  //   console.log(text);
  // }
  // const handleTech=(text)=>{
  //   console.log(text);
  // }
  // const handleTravel=(text)=>{
  //   console.log(text);
  // }
  // const handleFood=(text)=>{
  //   console.log(text);
  // }
  // const handleMind=(text)=>{
  //   console.log(text);
  // }
  // const handleCreative=(text)=>{
  //   console.log(text);
  // }





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
        <div className="bg-[#F3F6F3] z-100  md:p-5 p-2 mt-5 mb-5 flex justify-center items-center rounded-2xl">
          <Dropdown className=" bg-[#F3F6F3] z-100 ">
            <DropdownTrigger>
              <Button variant="Filterd By Categorie">Filterd By Categories</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem  key="The Creative Corner">The Creative Corner</DropdownItem>
              
              <DropdownItem   key="Health & Wellness Hub"> Health & Wellness Hub</DropdownItem>
              <DropdownItem key="Tech Talk Central">Tech Talk Central</DropdownItem>
              <DropdownItem   key="Travel Tales & Adventures">Travel Tales & Adventures</DropdownItem>
              <DropdownItem key=" Foodie Finds & Culinary Delights">  Foodie Finds & Culinary Delights</DropdownItem>
              <DropdownItem   key="Mindful Living Magazine">  Mindful Living Magazine</DropdownItem>
              
              {/* <DropdownItem key="delete" className="text-danger" color="danger">
                Delete file
              </DropdownItem> */}
            </DropdownMenu>
          </Dropdown>
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
                    <Button className="btn bg-red-300 rounded-lg text-white">
                      Details
                    </Button>
                  </Link>

                  <Button
                    onClick={() => handleWishlist(blog?.formattedDate,blog?.categories,blog?.long,blog?.short,blog?.title,blog?.photo)}
                    className="btn bg-[#00d2d3] rounded-lg text-white"
                  >
                    Wishlist
                  </Button>
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
