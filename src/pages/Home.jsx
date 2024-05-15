import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner/Banner";
import Newslatter from "../components/Newslatter/Newslatter";
import RecentBlogs from "../components/recentBlogs/RecentBlogs";
import MeetOurTeam from "../components/MeetOurTeam/MeetOurTeam";
import Comunity from "../components/Comunity/Comunity";





const Home = () => {
 
  return (
    <div>
      <Helmet>
        <title>Simple Blog | Home</title>
      </Helmet>
      <div className="space-y-5 bg-[#F3F6F3]">
        <div className="mb-5">
            <Banner></Banner>
        </div>
     
        <div className=" mt-5 mb-5 container mx-auto space-y-5">
          <RecentBlogs></RecentBlogs>
        </div>
        <div className="mt-5 mb-5 container mx-auto space-y-5">
            <Newslatter></Newslatter>
        </div>
        <div className="mt-5 mb-5 container mx-auto space-y-5">
          <MeetOurTeam></MeetOurTeam>
        </div>
        <div className="mt-5 mb-5 container mx-auto space-y-5">
          <Comunity></Comunity>
        </div>
        
      </div>
     
     
    </div>
  );
};

export default Home;
