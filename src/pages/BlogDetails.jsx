import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Avatar, Textarea } from "@nextui-org/react";
import axios from "axios";
import Swal from "sweetalert2";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


const BlogDetails = () => {
  
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  // const [comments,setComments]=useState([])
  // console.log(id);
  const { data: blogs, isPending } = useQuery({
    queryKey: ["blogs",id],
    queryFn: async () => {
      const res = await fetch(`https://simple-blog-server-two.vercel.app/id/${id}`)
      return res.json();
    },
  });
  const { data: comments, isPending :ispending2,refetch } = useQuery({
    queryKey: ["comments",id],
    queryFn: async () => {
      const res = await fetch(`https://simple-blog-server-two.vercel.app/comment/id/${id}`);
      return res.json();
    },
  });


  const ownerOfBlog = user?.email == blogs?.userEmail;
  // console.log(ownerOfBlog);

  const handleComment=(e)=>{
    e.preventDefault();
    const form=e.target;
    const comment=form.comment.value;
    const userName=user?.displayName;
    const userEmail=user?.email;
    const userPhoto=user?.photoURL;
    const newComment={id,userName,userEmail,comment,userPhoto}


    axios.post('https://simple-blog-server-two.vercel.app/comment',newComment)
    .then(res=>{
      // console.log(res.data)
      if (res.data.insertedId) {
        refetch()
        Swal.fire({
          icon: "success",
          title: "Wow...",
          text: "Your Added Comment!",
          footer: '<a href="#">Why do I have this issue?</a>'
          
        });
        
      }
      })
    .catch(error=>{console.log(error);})
  }
  // const handleDelete=()=>{
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!"
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       axios
  //       .delete(`comment/id/${id}`)
  //       .then((res) => {
  //         console.log(res)
  //         refetch()
  //         Swal.fire({
  //           title: "Deleted!",
  //           text: "Your file has been deleted.",
  //           icon: "success"
  //         });
  //       })
  //       .catch((err) => console.log(err));


  //     }
  //   });
  // }
  
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
  if (ispending2) {
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
    <div>
      <Helmet>
        <title>Simple Blog | Blog Details</title>
      </Helmet>
      <div className="bg-[#F3F6F3] md:p-5 p-2 mt-5 mb-5 rounded-2xl">
        <h1 className="text-3xl font-bold text-center underline  text-[#14261C] ">
          Blog Details
        </h1>
      </div>
      <div>
        <section className="p-6 bg-[#F3F6F3]   text-gray-100">
          <div>
            <h1 className="text-[#14261C] md:text-3xl text-2xl font-bold text-center mb-5 ">
              {blogs?.title}
            </h1>
          </div>
          <div className="w-full flex md:flex-row flex-col gap-5 min-h-screen">
            <div className="md:w-2/6 relative">
              <p className="absolute text-white bg-black ">
                Categories:{blogs?.categories}
              </p>
              <img src={blogs?.photo} alt="" />
            </div>
            <div className="md:w-2/6">
              <div>
                <p className=" text-[#14261C] border-b-2">
                  <span className="text-[#14261C] font-bold">
                    Short Description:
                  </span>{" "}
                  {blogs?.short}
                </p>
                <p className="text-[#14261C]">
                  <span className="text-[#14261C] font-bold">
                    Long Description:
                  </span>
                  {blogs?.long}
                </p>
              </div>
            </div>
            <div className="md:w-2/6">
              {
              ownerOfBlog ? (
                <div>
                <p className="text-red-500">"Can not comment on own blog ""You can Update Your Blog and observe others comments "</p>
                
                <Link to={`/updateblog/${blogs?._id}`}>
                <button className="w-full btn bg-[#00d2d3] p-4 rounded-lg">
                  Update
                </button>
                </Link>
                
              </div>
              ) : (
                <div className="bg-[#F3F6F3] text-[#14261C] shadow-[#00AC97] shadow-xl p-5 rounded-lg">
                <p className="text-2xl  font-bold ">
                  You Can Comment Here
                </p>
               <form onSubmit={handleComment}>
                
               <Textarea
               name="comment"
               label="Description"
                  labelPlacement="outside"
                  placeholder="Enter your description"
                  className=" bg-[#F3F6F3] shadow-[#00AC97] shadow-xl text-[#00AC97] rounded-lg mt-2 p-2"
                />
                <input type="submit"  className="w-full text-white bg-[#00d2d3] p-3 rounded-lg cursor-pointer mt-5"/>
               </form>
              
              </div>
              )}
               {
                comments?.map(comment=><div key={comment._id} className="bg-[#F3F6F3] text-[#14261C] shadow-[#00AC97] shadow-xl p-5 rounded-lg mb-5 mt-5">
                  <div className="w-full bg-[#F3F6F3] p-4 rounded-lg mt-5">
                   <div className="flex justify-around gap-3 border-b-4">
                    <div className="">
                    <Avatar isBordered radius="sm" src={comment?.userPhoto} />
                    </div>
                   <p className="text-[#00AC97]">{comment?.userName}</p>
                   <p className="text-[#00AC97]">{comment?.userEmail}</p>
                   </div>
                   <div className="flex justify-between" >
                   <p className="text-red-400">{comment?.comment}</p>
                    
                   </div>
                  </div>
                </div>)
               }
            </div>
            
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogDetails;
