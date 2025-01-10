import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AllBlogs = () => {
  const [allBlogPost, setAllBlogPost] = useState([]);
  const [filterBlogs, setFilterBlogs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPost = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://assignment11-client-side.vercel.app/allBlogPost?searchText=${searchText}`
        );
        const data = await response.json();
        setAllBlogPost(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setIsLoading(false);
      }
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
    <div>
      <div className="my-10 min-h-screen">
        <h1 className="text-center text-2xl font-bold my-6">
          Checkout All Latest Posts!
        </h1>

        <div className="flex max-sm:flex-col max-sm:w-[60%] max-sm:mx-auto justify-center mb-6">
          <input
            type="text"
            placeholder="Search by Title"
            className="input input-bordered mx-2 mb-4"
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
                (category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                )
              )}
          </select>
        </div>

        <div className="grid grid-cols-1 gap-6 min-h-screen">
          {isLoading ? (
            Array.from({ length: 3 }).map((_,idx) => (
              <div key={idx} className="card w-[70%] mx-auto shadow-xl p-2">
                <div className="grid md:grid-cols-2 gap-4">
                  <Skeleton height={150} width={"100%"} />
                  <div>
                    <Skeleton count={3} />
                    <Skeleton width={"50%"} height={30} />
                  </div>
                </div>
              </div>
            ))
          ) : filterBlogs.length > 0 ? (
            filterBlogs.map((post) => (
              <div
                key={post._id}
                className="card w-[70%] mx-auto bg-base-100 shadow-xl p-2 grid-cols-1 grid md:grid-cols-2"
              >
                <figure className="object-contain mx-auto">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="max-sm:mt-4 rounded-lg object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl">{post.title}</h2>
                  <h2 className="font-light text-xl">{post.category}</h2>
                  <p className="font-medium">
                    Description : {post.shortDescription}
                  </p>
                  <div className="card-actions justify-end">
                    {user && user.email ? (
                      <button
                        className="btn btn-secondary"
                        onClick={() => handleAddToWishlist(post)}
                      >
                        Add to Wishlist
                      </button>
                    ) : (
                      <button className="text-xs font-thin my-auto">
                        Please Login To <br /> Add On Your WishList
                      </button>
                    )}
                    <Link to={`/allBlogPosts/${post._id}`}>
                      <button className="btn btn-primary">
                        Explore Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center pt-10 text-xl font-semibold">
              No Posts Found!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
