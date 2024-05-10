import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>
            Simple Blog | Home 
        </title>
      </Helmet>
     <div className="w-full  bg-gradient-to-r from-[#14261C] to-[#F3F6F3] ">
       <div className="md:w-2/4 ">
       {/* <img src="https://lottie.host/embed/42cd3f01-e5b6-4393-8bc5-4c7ba9e47be4/zWrSoFbTVr.json" alt="" className="w-full" /> */}
       <iframe src="https://lottie.host/embed/42cd3f01-e5b6-4393-8bc5-4c7ba9e47be4/zWrSoFbTVr.json" className="w-full min-h-screen"></iframe>
       </div>
     </div>
    </div>
  );
};

export default Home;
