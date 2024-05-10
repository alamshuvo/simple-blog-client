import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner/Banner";


const Home = () => {
 
  return (
    <div>
      <Helmet>
        <title>Simple Blog | Home</title>
      </Helmet>
      <div>
        <div>
            <Banner></Banner>
        </div>
      </div>
     
    </div>
  );
};

export default Home;
