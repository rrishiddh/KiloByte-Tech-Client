import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";

import AuthLayout from "../components/AuthLayout";
import Register from "../components/Register";
import Login from "../components/Login";
import AddBlog from "../components/AddBlog";
import AllBlogs from "../components/AllBlogs";
import FeaturedBlogs from "../components/FeaturedBlogs";
import WishList from "../components/WishList";


const router = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element : <Home></Home>,
            },
            {
              path: "/addBlog",
              element : <AddBlog></AddBlog>,
          },
          {
            path: "/allBlogs",
            element : <AllBlogs></AllBlogs>,
        },
        {
          path: "/featuredBlogs",
          element : <FeaturedBlogs></FeaturedBlogs>,
      },
        {
          path: "/wishList",
          element : <WishList></WishList>,
      },
            {
                path: "auth",
                element: <AuthLayout></AuthLayout>,
                children : [
                  {
                    path: "/auth/login",
                    element: <Login></Login>,
                  },
                  {
                    path: "/auth/register",
                    element: <Register></Register>,
                  }                 
                ]
            },                       
        ]
    }
])
export default router;