import { Helmet } from "react-helmet-async";
import 'ka-table/style.css';



import { Table } from 'ka-table';
import { DataType, EditingMode, SortingMode } from 'ka-table/enums';
import { useQuery } from "@tanstack/react-query";



const FeaturedBlogs = () => {


  const { data: blogs, isPending } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/blog`);
      return res.json();
    },
  });
  console.log(blogs);
  const dataArray = blogs?.slice(0,10).fill(blogs)
  .map((blog, index) => ({
    SerialNumber: `:${index+1}`,
    blogTitle: blog?.title,
    userName: `${blog?.userName}`,
    column4: `column:4 row:${index}`,
    id: index,
  }));

//   const filteredData = blogs?.reduce((accumulator, item) => {
//     if (item.long >  item.long ) {
//         accumulator.push(item);
//     }
//     return accumulator;
// }, []);
// console.log(filteredData);



  return (
    <div>
      <Helmet>
        <title>Simple Blog | Featured Blog</title>
      </Helmet>
      <div className="bg-[#F3F6F3] md:p-5 p-2 mt-5 mb-5 rounded-2xl">
        <h1 className="text-3xl font-bold text-center underline  text-[#14261C] ">
          Featured Blog
        </h1>
      </div>
      <Table
      columns={[
        { key: 'SerialNumber', title: 'SerialNumber', dataType: DataType.String },
        { key: 'blogTitle', title: 'blogTitle', dataType: DataType.String },
        { key: ' Blog Owner', title: ' Blog Owner', dataType: DataType.String },
        { key: ' Profile Picture', title: ' Profile Picture', dataType: DataType.String },
      ]}
      data={dataArray}
      editingMode={EditingMode.Cell}
      rowKeyField={'id'}
      sortingMode={SortingMode.Single}
    />
    </div>
  );
};

export default FeaturedBlogs;
