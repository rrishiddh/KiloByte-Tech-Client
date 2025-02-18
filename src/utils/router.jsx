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
import PrivateRoute from "./PrivateRoute";
import BlogDetails from "../components/BlogDetails";
import UpdateBlogPage from "../components/UpdateBlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://kilo-byte-tech-server.vercel.app/recentBlog"),
      },
      {
        path: "/addBlog",
        element: (
          <PrivateRoute>
            <AddBlog></AddBlog>
          </PrivateRoute>
        ),
      },
      {
        path: "/allBlogs",
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: "/allBlogPosts/:id",
        element: <BlogDetails></BlogDetails>,
        loader: () => fetch("https://kilo-byte-tech-server.vercel.app/allBlogPosts"),
      },
      {
        path: "/updateBlog/:id",
        element: (
          <PrivateRoute>
            <UpdateBlogPage></UpdateBlogPage>
          </PrivateRoute>
        ),
        loader: () => fetch("https://kilo-byte-tech-server.vercel.app/allBlogPosts"),
      },
      {
        path: "/featuredBlogs",
        element: <FeaturedBlogs></FeaturedBlogs>,
      },
      {
        path: "/wishList",
        element: (
          <PrivateRoute>
            <WishList></WishList>
          </PrivateRoute>
        ),
      },
      {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
          {
            path: "/auth/login",
            element: <Login></Login>,
          },
          {
            path: "/auth/register",
            element: <Register></Register>,
          },
        ],
      },
    ],
  },
]);
export default router;
