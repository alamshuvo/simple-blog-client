import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>
            Simple Blog | Home 
        </title>
      </Helmet>
     <h1 className="  ">this is home</h1>
    </div>
  );
};

export default Home;
