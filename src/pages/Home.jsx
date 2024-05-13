import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner/Banner";
import Newslatter from "../components/Newslatter/Newslatter";
import RecentBlogs from "../components/recentBlogs/RecentBlogs";
import MeetOurTeam from "../components/MeetOurTeam/MeetOurTeam";




const Home = () => {
 
  return (
    <div>
      <Helmet>
        <title>Simple Blog | Home</title>
      </Helmet>
      <div className="space-y-5">
        <div>
            <Banner></Banner>
        </div>
        <div className=" container mx-auto">
          <RecentBlogs></RecentBlogs>
        </div>
        <div className="container mx-auto">
            <Newslatter></Newslatter>
        </div>
        <div className="container mx-auto">
          <MeetOurTeam></MeetOurTeam>
        </div>
        
      </div>
     
    </div>
  );
};

export default Home;
