import { Outlet } from "react-router-dom";
import Nabbar from "../components/navbar/Nabbar";
import Footer from "../pages/Footer";

const Mainlayoutes = () => {
    return (
        <div className="font-kanit">
         <div>
         <Nabbar></Nabbar>
         </div>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayoutes;