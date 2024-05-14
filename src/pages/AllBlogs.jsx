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
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AllBlogs = () => {
  const { user, error } = useContext(AuthContext);
  const [filter, setFilter] = useState('');
  const [filteredata,setFilteredata]=useState([]);
  const { data: blogs, isPending } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/blog/`);
      return res.json();
    },
  });

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
      .post("http://localhost:5000/wish", id)
      .then((res) => {
        console.log(res.data);
        if (!error) {
          Swal.fire({
            icon: "success",
            title: "WOW",
            text: "Blog added  wishlist sucessfully!",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(id);
  };
    useEffect(() => {
      // Filter the bid array based on the selected category
      const filteredData = blogs.filter((item) =>
          filter ? item.categories === filter : true
      );
      // setFilter(filteredData);
      setFilteredata(filteredData)
  }, [blogs,filter]);

 



  return (
    <div>
      <Helmet>
        <title>Simple Blog | All Blogs</title>
      </Helmet>
      <div className=" md:p-5 p-2 mt-5 mb-5 rounded-2xl">
        <h1 className="text-3xl font-bold text-center underline  text-[#14261C] ">
          All Blogs
        </h1>
      </div>
      <div>
        <div className="z-100  md:p-5 p-2 mt-5 mb-5 flex justify-center items-center rounded-2xl">
          <div className="relative flex flex-col items-center">
            <h6 className="font-lato py-2 font-bold font-2xl">Filterd By Categorie:</h6>

            <select
              onChange={(e) => setFilter(e.target.value)}
              name="categories"
              value={filter}
              className="px-4 py-3.5 bg-[#dee1e4] text-black md:w-2/4 m-auto text-sm border-2 border-gray-100 focus:border-blue-500  outline-[#007bff] w-full"
            >
              <option value="">Select an option</option>
              <option value="The Creative Corner">"The Creative Corner"</option>
              <option value="Health & Wellness Hub">"Health & Wellness Hub"</option>
              <option value="Tech Talk Central">"Tech Talk Central"</option>
              <option value=" Foodie Finds & Culinary Delights">" Foodie Finds & Culinary Delights"</option>
              <option value="Travel Tales & Adventures">"Mindful Living Magazine"</option>
              <option value="Career Compass: Navigating Your Professional Journey">"Career Compass: Navigating Your Professional Journey"</option>
            
            </select>
          </div>
        </div>
        <div>
          {filteredata?.map((blog) => (
            <div
              key={blog._id}
              className="md:w-4/6 p-2 mx-auto shadow-[#00AC97] shadow-xl "
            >
              <div className="w-full mb-5 mt-4  ">
                <Card className="py-4 z-[-100] bg-[#F3F6F3] p-4 rounded-lg text-black shadow-lg">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <div>
                      <p className="text-tiny mt-2 uppercase font-bold">
                        {blog?.title}
                      </p>
                      <p className="text-red-500 mt-2">
                        Added Time : {blog?.formattedDate}
                      </p>
                    </div>
                    <small className="text-default-500 mt-2">
                      {blog?.short}
                    </small>
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

                {/* buttons */}
                <div className="flex justify-between bg-gray-100 p-3 rounded-lg">
                  <Link to={`/blogdetails/${blog?._id}`}>
                    <Button className="btn bg-red-300 rounded-lg text-white">
                      Details
                    </Button>
                  </Link>

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
