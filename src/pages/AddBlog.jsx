import { Input, Textarea } from "@nextui-org/react";

const AddBlog = () => {
const handleAddBlog=(e)=>{
  e.preventDefault();
  const form=e.target;
  const title=form.title.value;
  const categories=form.categories.value;
  const short=form.short.value;
  const long=form.long.value;
  const photo=form.photo.value;
  const blog={title,categories,short,long,photo};
  console.log(blog);


}





  return (
    <div className="bg-[#F3F6F3]">
      <h1 className="text-3xl font-bold text-center space-y-3 text-[#00AC97]">
        Add Your Blog
      </h1>
      <div className="flex md:flex-row flex-col-reverse ">
        <div className="md:w-1/4 w-full">
        <iframe src="https://lottie.host/embed/ae3bb47e-fa7a-4bbc-b4c1-c7ad69b5d0c6/brMGZT9Hgw.json" className="w-full min-h-screen"></iframe>
        </div>
        <div className="md:w-3/4 w-full p-3">
          <form onSubmit={handleAddBlog} className="flex  flex-col gap-4 bg-white p-4 rounded-lg">
            
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
                    value={
                      "Career Compass: Navigating Your Professional Journey"
                    }
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
            <input type="submit"  className="w-full p-5 bg-[#00d2d3] rounded-lg text-white cursor-pointer "/>
            
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
