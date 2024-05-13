import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "@nextui-org/react";


const PriveteRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location =useLocation();
    if (loading) {
        return      <Spinner />

    }
    if (user) {
    
        return children; 
       
      
    }
     
return <Navigate to="/login" state={location.pathname}></Navigate>
};

export default PriveteRoutes;