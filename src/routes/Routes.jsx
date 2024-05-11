import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayoutes from "../Layouts/Mainlayoutes";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AddBlog from "../pages/AddBlog";

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
         },
         {
            path:"/registation",
            element:<Signup></Signup>
         },
         {
          path:"/addblog",
          element:<AddBlog></AddBlog>
         }
      ]
    },
  ]);

export default router;