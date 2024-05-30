import { Input, Textarea } from "@nextui-org/react";
import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

const AddBlog = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const handleAddBlog = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const categories = form.categories.value;
    const short = form.short.value;
    const long = form.long.value;
    const photo = form.photo.value;
    const userName = user?.displayName;
    const userEmail = user?.email;
    const userPhoto = user?.photoURL;
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();
    // console.log(currentDate);

    const blog = {
      title,
      categories,
      short,
      long,
      photo,
      userEmail,
      formattedDate,
      userName,
      userPhoto,
    };
    // console.log(blog);
    axios
      .post("https://simple-blog-server-two.vercel.app/blog", blog)
      .then((res) => {
        // console.log(res.data);
        Swal.fire({
          icon: "success",
          title: "WOW",
          text: "add Blog  sucessfully!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
        navigate(from);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  return (
    <div className="bg-[#F3F6F3]">
      <Helmet>
        <title>Simple Blog | Add Blog</title>
      </Helmet>
      <div className=" md:p-5 p-2 mt-5 mb-5 rounded-2xl ">
        <h1 className="md:text-4xl text-3xl font-bold  underline  text-[#14261C] ">
          Add Blog
        </h1>
        <p
          className="mt-2"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Welcome to the Add Blog page! Here, you can contribute your own blog
          posts to our platform. This page allows you to share your insights,
          experiences, and stories with our community. Select the appropriate
          category for your post to ensure it reaches the right audience.
          Whether you are writing about technology, lifestyle, travel, or any
          other topic, our Add Blog page makes it easy for you to organize and
          publish your content. Join our vibrant community of bloggers and let
          your voice be heard. Happy blogging!
        </p>
      </div>
      <div className="flex md:flex-row flex-col-reverse md:p-7 p-3 ">
        <div className="md:w-1/4 w-full">
          <iframe
            src="https://lottie.host/embed/ae3bb47e-fa7a-4bbc-b4c1-c7ad69b5d0c6/brMGZT9Hgw.json"
            className="w-full min-h-screen"
          ></iframe>
        </div>
        <div className="md:w-3/4 w-full p-3 shadow-[#00AC97] shadow-xl">
          <form
            onSubmit={handleAddBlog}
            className="flex  flex-col gap-4 bg-white p-4 rounded-lg"
          >
            <label htmlFor="Title">Title</label>
            <Input
              type="text"
              required
              name="title"
              placeholder="Add Your Blog Title"
              className="shadow-lg"
            />
            <div>
              <label htmlFor="categories" className="block">
                Categories
              </label>
              <select
                name="categories"
                required
                className="select select-bordered shadow-lg mt-2 w-full px-4 py-3 rounded-md "
              >
                <option disabled selected>
                  Categories
                </option>
                <option value={"The Creative Corner"}>
                  The Creative Corner
                </option>
                <option value={"Health & Wellness Hub"}>
                  Health & Wellness Hub
                </option>
                <option value={"Tech Talk Central"}>Tech Talk Central</option>
                <option value={"Travel Tales & Adventures"}>
                  Travel Tales & Adventures
                </option>
                <option value={"Foodie Finds & Culinary Delights"}>
                  Foodie Finds & Culinary Delights
                </option>
                <option value={"Mindful Living Magazine"}>
                  Mindful Living Magazine
                </option>
                <option
                  value={"Career Compass: Navigating Your Professional Journey"}
                >
                  Career Compass: Navigating Your Professional Journey
                </option>
                <option value={"Parenting Perspectives"}>
                  Parenting Perspectives
                </option>
              </select>
            </div>
            <Textarea
              isRequired
              label="Short Description"
              labelPlacement="outside"
              placeholder="Enter your description"
              className="shadow-lg w-full"
              name="short"
            />
            <Textarea
              label="Long Description"
              variant="bordered"
              placeholder="Enter your Long description"
              disableAnimation
              disableAutosize
              labelPlacement="outside"
              name="long"
              className="shadow-lg"
              classNames={{
                base: "max-w-xs",
                input: "resize-y min-h-[40px]",
              }}
            ></Textarea>

            <label htmlFor="photo">Img Url</label>
            <Input
              type="text"
              required
              name="photo"
              placeholder="Add Your Blog Photo URL"
              className="shadow-lg"
            />

            <div>
              <input
                type="submit"
                className="w-full p-5 bg-[#00d2d3] rounded-lg text-white cursor-pointer "
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
