import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider";

const AllBlogs = () => {
  const [allBlogPost, setAllBlogPost] = useState([]);
  const [filterBlogs, setFilterBlogs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchBlogPost = async () => {
      const response = await fetch(
        `http://localhost:5000/allBlogPost?searchText=${searchText}`
      );
      const data = await response.json();
      setAllBlogPost(data);
    };

    fetchBlogPost();
  }, [searchText]);

  useEffect(() => {
    let posts = [...allBlogPost];

    if (filterCategory !== "All") {
      posts = posts.filter((post) => post.category === filterCategory);
    }

    setFilterBlogs(posts);
  }, [filterCategory, allBlogPost]);

  
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
    <div>
      <div className="">
        <div className="my-10">
          <h1 className="text-center text-2xl font-bold my-6">
            Checkout All Latest Posts!
          </h1>

          <div className="flex justify-center mb-6">
            <input
              type="text"
              placeholder="Search by Title"
              className="input input-bordered mx-2"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />

            <select
              onChange={(e) => setFilterCategory(e.target.value)}
              className="select select-bordered mx-2"
            >
              <option value="All">Filter by Category:</option>
              {allBlogPost.length > 0 &&
                [...new Set(allBlogPost.map((post) => post.category))].map(
                  (category, idx) => (
                    <option key={idx} value={category}>
                      {category}
                    </option>
                  )
                )}
            </select>
          </div>

          <div className="grid grid-cols-1  gap-6 min-h-screen">
            {allBlogPost.length === 0 && (
              <p className="text-center pt-10 text-xl font-semibold">
                No Posts Found!
              </p>
            )}
            {filterBlogs.map((post, idx) => (
              <div
                key={idx}
                className="card w-[70%] mx-auto bg-base-100 shadow-xl p-2 grid-cols-1 grid md:grid-cols-2"
              >
                <figure className="w-[50%] mx-auto">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className=" max-sm:mt-4 rounded-lg object-contain "
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl">{post.title}</h2>
                  <h2 className="font-light text-xl">{post.category}</h2>
                  <p className="font-medium">
                    Description : {post.shortDescription}
                  </p>

                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleAddToWishlist(post)}
                    >
                      Add to Wishlist
                    </button>
                    <Link to={`/allBlogPosts/${post._id}`}>
                      <button className="btn btn-primary">
                        Explore Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
