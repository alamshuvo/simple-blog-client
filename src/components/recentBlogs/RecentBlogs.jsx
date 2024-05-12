import { useQuery } from "@tanstack/react-query";

import { Link } from "react-router-dom";


const RecentBlogs = () => {
  const { data: blogs=[], isPending } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/blog");
      return res.json();
    },
  });
  console.log(blogs);

  if (isPending) {
    return <p>Loading............</p>
        
    
  }

  return (
   <div className="z-0">
   <div className="bg-[#F3F6F3] md:p-5 p-2 mt-5 mb-5 rounded-2xl">
       <h1 className="text-3xl font-bold text-center underline  text-[#14261C] ">Our Recent Blogs</h1>
   </div>
 <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 ">
   {
       blogs.length>0 && blogs?.slice(0,6).map(blog=><div key={blog._id} className="p-5 rounded-lg shadow-lime-300 bg-[#F3F6F3]">
       <div className="   rounded-md shadow-md  text-[#00AC97] ">
         <div className=" overflow-hidden rounded-lg p-2 ">
           <p>Categories: {blog?.categories}</p>
           <img
             src={blog.photo}
             alt=""
             className="w-full p-2 rounded-lg h-[450px]"
           />
         </div>
         <div className="flex flex-col justify-between h-auto p-6 space-y-8 ">
           <div className="space-y-2">
             <h2 className="md:text-3xl text-2xl text-[#14261C] font-semibold ">
               {blog?.title.slice(0, 20)}
             </h2>
             <p className=" text-[#00AC97]">{blog?.short.slice(0, 100)}</p>
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
             <Link to={`/wishlist/${blog?._id}`}>
               <button
                 type="button"
                 className="flex items-center justify-between w-full p-3 font-semibold tracking-wide rounded-md bg-[#00d2d3] text-white"
               >
                 Wishlist
               </button>
             </Link>
           </div>
         </div>
       </div>
     </div>)
   }
 </div>
</div>
  );
};

export default RecentBlogs;
