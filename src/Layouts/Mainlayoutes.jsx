import { Outlet } from "react-router-dom";
import Nabbar from "../components/navbar/Nabbar";
import Footer from "../pages/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import "./style.css";



const Mainlayoutes = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
    return (
        <>
        
         <motion.div className="progress-bar" style={{ scaleX }} />
        <div className="font-kanit  ">
        <Nabbar></Nabbar>
        <div className="min-h-screen ">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </div>
        </>
    );
};

export default Mainlayoutes;