import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayoutes from "../Layouts/Mainlayoutes";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";

  const  router = createBrowserRouter([
    {
      path: "/",
      element:<Mainlayoutes></Mainlayoutes>,
      errorElement:<Error></Error>,
      children:[
         {
            path:"/",
            element:<Home></Home>
         },
         {
            path:"/login",
            element:<Login></Login>
         }
      ]
    },
  ]);

export default router;