import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner/Banner";
import Newslatter from "../components/Newslatter/Newslatter";
import D3 from "../components/3d/D3";


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
        <div>
          <D3></D3>
        </div>
      </div>
     
    </div>
  );
};

export default Home;
