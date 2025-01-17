import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayoutes from "../Layouts/Mainlayoutes";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AddBlog from "../pages/AddBlog";
import AllBlogs from "../pages/AllBlogs";
import FeaturedBlogs from "../pages/FeaturedBlogs";
import Wishlist from "../pages/Wishlist";
import BlogDetails from "../pages/BlogDetails";
import UpdateBlog from "../pages/UpdateBlog";
import PriveteRoutes from "./PriveteRoutes";

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
          element:<PriveteRoutes><AddBlog></AddBlog></PriveteRoutes>
         },
         {
          path:"/allblogs",
          element:<AllBlogs></AllBlogs>
         },
         {
          path:"/featuredblog",
          element:<FeaturedBlogs></FeaturedBlogs>
         },
         {
          path:"/wishlist",
          element:<Wishlist></Wishlist>
         },
         {
          path:"/blogdetails/:id",
          element:<PriveteRoutes><BlogDetails></BlogDetails></PriveteRoutes>
         },

         {
          path:"/updateblog/:id",
          element:<PriveteRoutes><UpdateBlog></UpdateBlog></PriveteRoutes>
         }
      ]
    },
  ]);

export default router;