import { Helmet } from "react-helmet-async";
import "ka-table/style.css";

import { Table } from "ka-table";
import { DataType, EditingMode, SortingMode } from "ka-table/enums";
import { useQuery } from "@tanstack/react-query";
import { Avatar } from "@nextui-org/react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FeaturedBlogs = () => {
  const { data: blogs, isPending } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await fetch(
        `https://simple-blog-server-two.vercel.app/featured`
      );
      return res.json();
    },
  });
  // console.log(blogs);

  const calculateWordCount = (text) => {
    return text ? text.split(" ").length : 0;
  };

  const sortedPosts = blogs?.sort((a, b) => {
    return (
      calculateWordCount(b.long) -
      calculateWordCount(a.long)
    );
  });

  const topPosts = sortedPosts?.slice(0, 10);


  
  const dataArray = topPosts?.slice(0, 10).map((blog, index) => ({
    SerialNumber: index + 1,
    blogTitle: blog?.title,
    userName: blog?.userName,
    ProfilePicture: blog?.userPhoto,
    id: index,
  }));

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
    <div>
      <Helmet>
        <title>Simple Blog | Featured Blog</title>
      </Helmet>
      <div className=" md:p-5 p-2 mt-5 mb-5 rounded-2xl">
        <h1 className="md:text-4xl text-3xl font-bold text-center underline  text-[#14261C] ">
          Featured Blog
        </h1>
      </div>
      <Table
        columns={[
          {
            key: "SerialNumber",
            title: "SerialNumber",
            dataType: DataType.String,
          },
          { key: "blogTitle", title: "blogTitle", dataType: DataType.String },
          { key: "userName", title: " userName", dataType: DataType.String },
          {
            key: "ProfilePicture",
            title: "ProfilePicture",
            dataType: DataType.String,
          },
        ]}
        data={dataArray}
        editingMode={EditingMode.Cell}
        rowKeyField={"id"}
        sortingMode={SortingMode.Single}
        format={({ column, value }) => {
          if (column.key === "ProfilePicture") {
            return (
              <Avatar
                className="w-[100px] h-[100px]"
                isBordered
                radius="sm"
                src={value}
              />
            );
          }
        }}
      />
    </div>
  );
};

export default FeaturedBlogs;
