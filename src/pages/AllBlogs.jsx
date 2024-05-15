import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Textarea } from "@nextui-org/react";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AllBlogs = () => {
  const { user, error } = useContext(AuthContext);
  const [filter, setFilter] = useState("");
  const [filteredata, setFilteredata] = useState([]);
  const [value, setValue] = useState("");


  const { data: blogs, isPending } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await fetch(`https://simple-blog-server-two.vercel.app/blog`);

      return res.json();
    },
  });


 


  // const filterArrayByProperty = (array, propertyName, searchValue) => {
  //   return array.filter(item => item[propertyName] === searchValue);
  // };


 
  


  const handleWishlist2 = () => {
    Swal.fire({
      icon: "error",
      title: "Please loogdin",
      text: "please loogdin and Blog added wishlist  sucessfully!",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
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
      .post("https://simple-blog-server-two.vercel.app/wish", id)
      .then((res) => {
        // console.log(res.data);
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
        // console.log(error);
      });
    // console.log(id);
  };

  useEffect(() => {
    const filteredData = blogs?.filter((item) =>
      filter ? item.categories === filter : true
    );

    setFilteredata(filteredData);
  }, [blogs, filter]);

 
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

  console.log(value);
  return (
    <div>
      <Helmet>
        <title>Simple Blog | All Blogs</title>
      </Helmet>
      <div className=" md:p-5 p-2 mt-5 mb-5 rounded-2xl">
        <h1 className="text-3xl font-bold underline  text-[#14261C] ">
          All Blogs
        </h1>
        <p
          className="mt-2"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Welcome to the All Blogs page! This is your one-stop destination to
          explore a diverse range of blog posts contributed by our community of
          users. Here, you'll find a wide variety of topics covered, from
          technology and lifestyle to travel and personal stories. Each post is
          categorized for easy navigation, allowing you to find content that
          interests you quickly. Dive into the thoughts and experiences of
          different writers, gain new perspectives, and discover valuable
          insights. Whether you're looking for inspiration, information, or just
          a good read, the All Blogs page has something for everyone. Enjoy
          exploring our extensive collection of blog posts!
        </p>
      </div>
      <div>
        <div className="z-100  md:p-5 p-2 mt-5 mb-5 flex  justify-center items-center rounded-2xl">
          <div className="relative flex md:flex-row flex-col gap-5 justify-between items-center rounded-lg shadow-[#00AC97] shadow-xl p-5">
            <h6 className="font-lato py-2 font-bold font-2xl">
              Filterd By Categorie:
            </h6>

            <select
              onChange={(e) => setFilter(e.target.value)}
              name="categories"
              value={filter}
              className="px-4 py-3.5 bg-[#dee1e4] text-black md:w-2/4 m-auto text-sm border-2 border-gray-100 shadow-[#00AC97] shadow-xl w-full"
            >
              <option value="">All Categories</option>
              <option value="The Creative Corner">"The Creative Corner"</option>
              <option value="Health & Wellness Hub">
                "Health & Wellness Hub"
              </option>
              <option value="Tech Talk Central">"Tech Talk Central"</option>
              <option value="Foodie Finds & Culinary Delights">
                "Foodie Finds & Culinary Delights"
              </option>
              <option value="Travel Tales & Adventures">
                "Mindful Living Magazine"
              </option>
              <option value="Career Compass: Navigating Your Professional Journey">
                "Career Compass: Navigating Your Professional Journey"
              </option>
            </select>
            <div className="w-full shadow-[#00AC97] shadow-xl p-5 flex flex-col gap-2 max-w-[240px]">
              <Textarea
                variant="underlined"
                label="Search Here"
                labelPlacement="outside"
                placeholder="Search Here By Your Blogs Title"
                value={value}
                onValueChange={setValue}
              />
              <p className="text-default-500 text-small">
                Textarea value: {value}
              </p>
              <button
                // onClick={() => filterArrayByProperty(filteredata,value)}
                className="btn p-2 cursor-pointer shadow-[#00AC97] shadow-xl rounded-lg bg-[#00AC97] text-white"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div>
          {filteredata?.map((blog) => (
            <div
              key={blog._id}
              className="md:w-4/6 p-2  mb-4 mt-4 mx-auto shadow-[#00AC97] shadow-xl "
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="w-full mb-5 mt-4 h-full ">
                <Card className="py-4 z-[-100] h-[600px] bg-[#F3F6F3] p-4 rounded-lg text-black shadow-lg">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <div>
                      <p className="text-tiny mt-2 uppercase font-bold">
                        {blog?.title}
                      </p>
                      <p className="text-tiny mt-2 text-red-500  font-bold">
                        Categories : {blog?.categories}
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
                    <div className="overflow-hidden  w-full">
                      <img
                        alt="Card background"
                        className="object-cover w-full rounded-xl cursor-pointer h-full"
                        src={blog?.photo}
                        // width={400}
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
                      className="btn bg-[#00d2d3] rounded-lg text-white"
                    >
                      Wishlist
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleWishlist2}
                      className="btn bg-[#00d2d3] rounded-lg text-white"
                    >
                      without login you cant added Wishlist
                    </Button>
                  )}
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
