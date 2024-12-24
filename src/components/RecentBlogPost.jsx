import { Link, useLoaderData } from "react-router-dom";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider";
import { motion } from "motion/react"


const RecentBlogPost = () => {
    const recentBlog = useLoaderData();
      const { user } = useContext(AuthContext);
    

     const handleAddToWishlist = async (post) => {
        const postData = {
          postId: post._id,
          title: post.title,
          imageUrl: post.imageUrl,
          category: post.category,
          longDescription: post.longDescription,
          shortDescription: post.shortDescription,
          postingDate: post.postingDate,
          userEmail: user.email,
          userName: user.displayName,
        };
      
        await fetch("http://localhost:5000/wishList", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message === "Post is already in WishList") {
              Swal.fire({
                title: "This Post is already in your WishList.",
                icon: "warning",
              });
            } else {
              Swal.fire({
                title: "Added to WishList successfully!",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            Swal.fire({
              title: `An error occurred while adding to WishList. ${error}`,
              icon: "error",
            });
          });
      };

    return (
        <div className="my-10 w-[90%] mx-auto">
        <h1 className="text-center text-2xl font-bold my-6"> Checkout Some <br className="md:hidden" /> Recent Blog Post :</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
         recentBlog.map((blog,idx) => <motion.div
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }} key={idx} className="card card-compact bg-base-100 shadow-xl p-2">
          
          <div
            className="card-body">
            <h2 className="card-title">{blog.title}</h2>
            <p className="font-medium">Category : {blog.category}</p>
            <p className="text-sm">Description : {blog.shortDescription}</p>
            <div className="card-actions justify-end flex">
            <Link to={`/allBlogPosts/${blog._id}`}>
                  <button className="btn btn-sm btn-primary">Explore Details</button>
            </Link>
            <Link onClick={() => handleAddToWishlist(blog)}>
                  <button className="btn btn-sm btn-primary">Add to Wishlist</button>
            </Link>
            </div>
          </div>
        </motion.div>)
        }
        </div>
  
        
      </div>
    );
};

export default RecentBlogPost;