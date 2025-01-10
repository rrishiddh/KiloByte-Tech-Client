import { Link, useLoaderData } from "react-router-dom";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider";
import { motion } from "motion/react"
import { Typewriter } from 'react-simple-typewriter'



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
      
        await fetch("https://assignment11-client-side.vercel.app/wishList", {
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
        <h1 className="text-center text-2xl max-md:text-xl font-bold my-6 mx-auto w-[80%]"> Checkout Some <br className="md:hidden" /> {" "}
        <Typewriter
            words={['Recent Blog Post!', 'Thoughts Shared With Us!', 'New Tech Recent Released!']}
            loop={0}
            cursor
            cursorBlinking
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          /></h1>
        <div className="grid max-sm:grid-cols-1 grid-cols-3 lg:grid-cols-4 gap-4">
        {
         recentBlog.map((blog,idx) => <motion.div
         whileHover={{ scale: 1.03 }}
         whileTap={{ scale: 0.99 }} key={idx} className="card card-compact bg-base-100 shadow-xl p-2">
          
          <div
            className="card-body">
            <p className="font-thin absolute top-0 right-0 border text-xs bg-base-200  btn btn-xs">{blog.category}</p>
            <h2 className="card-title text-base">{blog.title}</h2>
            <p className="text-sm font-light"> {blog.shortDescription.substring(0, 30) + "..."}</p>
            <div className="card-actions justify-end flex">
            { user && user.email ? (<button onClick={() => handleAddToWishlist(blog)} className="btn btn-sm text-xs bg-gradient-to-r from-sky-400 to-sky-300 hover:from-sky-500 hover:to-sky-600">Add to Wishlist</button>): ( <button className="text-xs font-thin my-auto">Please Login To <br /> Add On Your WishList</button>)}   
            <Link to={`/allBlogPosts/${blog._id}`}>
                  <button className="btn btn-sm text-xs bg-gradient-to-r from-sky-400 to-sky-300 hover:from-sky-500 hover:to-sky-600">Explore Details</button>
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