import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner/Banner";
import Newslatter from "../components/Newslatter/Newslatter";


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
        <div className="container mx-auto">
            <Newslatter></Newslatter>
        </div>
      </div>
     
    </div>
  );
};

export default Home;
